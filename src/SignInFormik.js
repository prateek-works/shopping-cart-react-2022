import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState, useEffect } from 'react'
import { db } from './firebase-config'
import { collection, doc, getDocs, addDoc } from 'firebase/firestore'
import { async } from '@firebase/util';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './App.js'
import { UserPage } from './UserPage';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, setUserStatus } from './redux/formSlice';
import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';


const theme = createTheme();

export default function SignIn() {

    const user = useSelector((state) => state.form.user)
    const isLoggedIn = useSelector((state) => state.form.isLoggedIn)
    const dispatch = useDispatch()

    // const navigate = useNavigate();

    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [accessToken, setaccessToken] = useState("");


    // const { user, setUser, updateUser } = useContext(UserContext);

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   const data = new FormData(event.currentTarget);
    //   console.log({
    //     email: data.get('email'),
    //     password: data.get('password'),
    //   });
    // };


    // useEffect(() => {
    //   if (accessToken != "")
    //     navigate("/ProductPage")

    // }, [accessToken]);

    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Invalid email format'),
        password: Yup.string().required('Password is required').min(6),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,

        onSubmit: (values) => {
            console.log('form values', values)

        }
    })

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            // setUser(currentUser);
            dispatch(createUser(currentUser?.email))
        });
    })

    const login = async () => {
        formik.handleSubmit();
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword,

            );
            //    navigate("/ProductPage")
            dispatch(setUserStatus(true))
            //  dispatch(createUser(loginEmail))

            console.log("userrrrrrrrrrrrrrrrrrrrrrr*********", user.user.email);
            console.log("userr access token", user.user.accessToken);
            console.log("auth", auth);

            setuserEmail(user.user.email);
            setaccessToken(user.user.accessToken);
            console.log("userEmaillllllllllll", userEmail)


        } catch (error) {
            console.log(error.message);
            // console.log("isUserCorrect:", isUserCorrect);

            alert("Invalid user")
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("logout")
            console.log(signOut)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <FormikProvider value={formik}>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                            <TextField                    // email input
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(event) => { setloginEmail(event.target.value) }}
                                error={Boolean(formik.errors.email) && Boolean(formik.touched.email)}
                                helperText={Boolean(formik.touched.email) && formik.errors.email}
                            />

                            <TextField                       // password input
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(event) => { setloginPassword(event.target.value) }}
                                error={Boolean(formik.errors.email) && Boolean(formik.touched.email)}
                                helperText={Boolean(formik.touched.email) && formik.errors.email}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />


                            {/* <Link href="#" variant="body2"> */}
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                onClick={login(formik)}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            {/* </Link> */}





                            {/* <h1>username:{user?.userEmail}</h1> */}

                            {/* <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={logout}
              sx={{ mt: 3, mb: 2 }}
            >
              LOGOUT
            </Button> */}

                            <Grid container>
                                <Grid item xs>
                                    <Link href="/UserPage" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>

            </ThemeProvider>
        </FormikProvider>
    );
}
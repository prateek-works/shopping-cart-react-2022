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
import { auth } from './firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { useState, useEffect } from 'react'
import { db } from './firebase-config'
import { collection, doc, getDocs, addDoc } from 'firebase/firestore'
import { Co2Sharp } from '@mui/icons-material';
import { async } from '@firebase/util';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, setUserStatus } from './redux/formSlice';
import { useNavigate } from 'react-router-dom';




const theme = createTheme();

export default function SignUp() {

    const user = useSelector((state) => state.form.user)
    const isLoggedIn = useSelector((state) => state.form.isLoggedIn)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");


    // const [user, setUser] = useState({});   //authenticated users
    const [users, setUsers] = useState([]);   // database stored users

    const usersCollectionRef = collection(db, "users")

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            // setUser(currentUser);
            dispatch(createUser(currentUser?.email))
        });
    })

    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(data)
        }
        getUsers()
    }, [])


    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            navigate("/ProductPage")
            dispatch(setUserStatus(true))

            console.log(user)
            await addDoc(usersCollectionRef, { email: registerEmail, password: registerPassword })

        } catch (error) {
            console.log(error.message);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
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
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
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
                            onChange={(event) => { setRegisterEmail(event.target.value) }}
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
                            onChange={(event) => { setRegisterPassword(event.target.value) }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={register}
                        >
                            Sign Up
                        </Button>


                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/SignIn" variant="body2">
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            {/* <h1>{user?.userEmail}</h1> */}
            {/* <Button onClick={logout}>Log Out</Button> */}
        </ThemeProvider>
    );
}
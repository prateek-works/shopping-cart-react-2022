import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { BrowserRouter as Router, Switch, Route, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useEffect } from 'react'
import { createUser, logoutUser, setUserStatus } from './redux/formSlice';

export const Navbar = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.form.user)
    const isLoggedIn = useSelector((state) => state.form.isLoggedIn)
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            // setUser(currentUser);
            dispatch(createUser(currentUser?.email))
        });
    })

    const logout = async () => {
        await signOut(auth);
        console.log("signout")
        dispatch(setUserStatus(false))
        navigate("/SignIn")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    ></IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        SHOPPING APP
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div">
                        Welcome {user?.userEmail}
                    </Typography>
                    <Button color="inherit" variant="contained" onClick={logout}>logout</Button>

                    <Button color="inherit">
                        <Link to="/CartPage">
                            <ShoppingCartIcon />
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};



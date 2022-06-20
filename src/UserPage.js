import React from 'react'
import { useContext } from 'react';
import { UserContext } from './App.js'
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from './redux/formSlice';
import { useState, useEffect } from 'react'
import { createUser } from './redux/formSlice';

export const UserPage = () => {

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            // setUser(currentUser);
            dispatch(createUser(currentUser?.email))
        });
    })

    //  const { user, setUser, updateUser } = useContext(UserContext);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector((state) => state.form.user)

    const logout = async () => {
        await signOut(auth);
        console.log("signout")
        //   dispatch(logoutUser())
        //  navigate("/SignIn")
    }


    return (
        <div>
            <h2>hello</h2>
            <h1>Welcome {user?.userEmail} !</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

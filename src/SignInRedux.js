import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from './redux/formSlice';


export const SignInRedux = () => {

    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");

    const user = useSelector((state) => state.form.user)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(user)
    }, [user])

    const signIn = (e) => {
        //    dispatch(createUser({ id: users[users.length - 1].id + 1, userEmail: loginEmail, userPassword: loginPassword }))
        dispatch(createUser(loginEmail))
        console.log("login emailllllll", loginEmail)
        e.preventDefault();


    }

    return (
        <div>
            <form>

                email:<input type="text" onChange={(event) => { setloginEmail(event.target.value) }} />
                password:<input type="password" onChange={(event) => { setloginPassword(event.target.value) }} />
                <button onClick={signIn}>Sign In</button>

            </form>
            {/* {users.map((user) => {
                return (
                    <div>
                        <h1> {user.userEmail}</h1>
                    </div>
                )
            })} */}
            {/* <h1>{user}</h1> */}
        </div>
    )
}

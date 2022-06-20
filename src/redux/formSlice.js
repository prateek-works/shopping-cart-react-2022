import { createSlice } from '@reduxjs/toolkit'

const initialState = {


    user: { userEmail: "" },
    isLoggedIn: false,
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        createUser: (state, action) => {
            const newuser = action.payload;
            console.log("reducer", action.payload)
            state.user.userEmail = newuser


        },
        logoutUser: (state, action) => {
            const user = "";
            state.user.userEmail = user;

        },
        setUserStatus: (state, action) => {
            const status = action.payload;
            state.isLoggedIn = status;
        }

    }
})

export const { createUser, logoutUser, setUserStatus } = formSlice.actions;
export default formSlice.reducer;
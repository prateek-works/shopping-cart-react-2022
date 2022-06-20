import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import SignIn from "./SignIn";


const ProtectedRoutes = () => {
    const isLoggedIn = useSelector((state) => state.form.isLoggedIn)

    return isLoggedIn ? <Outlet /> : <SignIn />
}

export default ProtectedRoutes;
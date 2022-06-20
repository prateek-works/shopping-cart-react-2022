import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import { createContext, useState } from "react";
import { UserPage } from './UserPage';
import { SignInRedux } from './SignInRedux';
import { Navbar } from './Navbar';
import { Catalogue } from './Catalogue';
import { Cart } from './Cart';
import SignInFormik from './SignInFormik';
import ProtectedRoutes from './ProtectedRoutes';



const UserContext = createContext();

function App() {


  // const [user, setUser] = useState({ name: "Prateek", age: 24 });

  // const updateUser = (user) => {
  //   setUser(user)
  // }
  // const providerValue = {
  //   user, setUser, updateUser
  // }

  return (
    <div className="App"> <SignInFormik /></div>

    // <Router>

    //   <div className="App">


    /* <UserContext.Provider value={providerValue}>
    </UserContext.Provider> 
  <Navbar />  */
    /* <SignInFormik /> */


    /* <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/ProductPage" element={<Catalogue />} />
        <Route path="/CartPage" element={<Cart />} />
      </Route>

    </Routes>
  </div>
</Router> */


  );
}

export default App;
export { UserContext };

import React, {Fragment , useEffect , useState , Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Layout
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

//Pages
import SetupProfile from "./components/pages/SetupProfile/Index";
import CreateRequest from "./components/pages/CreateRequestPage/Index";
import SignIn from "./components/pages/SignIn/Index";
import ForgotPW from "./components/pages/ForgotPW/Index";
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Index";
import EditProfile from "./components/pages/EditProfilePage/Index";
import Profile from "./components/pages/Profile/Index";
import Explore from "./components/pages/ExplorePage/Index"

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import Activation from "./components/pages/Activation/Activation";
import jwt_decode from "jwt-decode";
import { userConstants } from "./_constants";
import {userActions , profileActions} from './_actions'
import { useDispatch, useSelector} from "react-redux";

import Loading from './components/layout/loader/Loading';


const App = () => {

    const auth = useSelector((state) => state.auth);
    const { isAuthenticated} = auth;
    const dispatch = useDispatch();

    const [loading, setLoading] = useState();
    const [done, setDone] = useState();


  useEffect(() => {

      // setTimeout(() => {
        setLoading(true)
        // setTimeout(() => {
          setDone(true)
      //   }, 2500)
      // }, 3000);
  
      if (localStorage.jwtToken) {
          
        const token = localStorage.jwtToken;
        const decoded = jwt_decode(token);

        dispatch({
          type: userConstants.USER_LOGIN_SUCCESS,
          user: decoded,
        });
      }

      if (isAuthenticated === true){

        // dispatch(userActions.findOneUserAction())
        // dispatch(profileActions.GetprofileAction())

      }
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  // {!done ? (
  //   <Loading loading = {loading} />
  //   ) : (
  //     duv
  // )}

  
    return (
      <Fragment>
        <Router>
        <ReactNotification />

        {!done ? (
          <Loading loading = {loading} />
        ) : (
        <div>
          <Header />
          <Switch className='switchLayout'>

            <Route exact path='/' component={Home} />
            <Route path='/signIn' component={SignIn} />
            <Route path='/register' component={Register} />
            <Route path='/activate/:key' component={Activation} />
            <Route path='/forgotPW' component={ForgotPW} />
            <Route path='/setupProfile' component={SetupProfile} />
            <Route path='/editProfilePage' component={EditProfile} />
            <Route path='/createRequestPage' component={CreateRequest} />
            <Route path='/profilePage' component={Profile} />
            <Route path='/explorePage' component={Explore} />

          </Switch>
          <Footer />
        </div>
        )}

        </Router>

        <script
          src='https://unpkg.com/react/umd/react.production.min.js'
          crossorigin
        ></script>

        <script
          src='https://unpkg.com/react-dom/umd/react-dom.production.min.js'
          crossorigin
        ></script>

        <script
          src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js'
          crossorigin
        ></script>
      </Fragment>
    );
    
};

export default App;


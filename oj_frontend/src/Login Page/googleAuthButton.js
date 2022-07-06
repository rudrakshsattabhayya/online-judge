import { React, useState, useEffect } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from 'jwt-decode';
import postMethod from "../api";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

const GoogleAuthButton = () => {

  const [isloading, updateLoadingState] = useState(true);
  const [userNameModal,setModal] = useState(false);
  const [localAuth, updateLocalAuth] = useState(false);
  const clientId = "44379413784-23so9i7qkl8kldfg7s5rs5mj8tfuc8lg.apps.googleusercontent.com"
    // console.log(process.env.REACT_APP_CLIENT_ID)

  const responseGoogle = async (res) => {
    try {
       const data = await res;
       const decoded_obj = await jwt_decode(data.credential);
       const final_obj = {
          name: decoded_obj.given_name,
          email: decoded_obj.email,
          picture: decoded_obj.picture
       }
       const response = await postMethod(final_obj, "/Apis/sign-in");
       console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
          isSignedIn={true}
        />
      </GoogleOAuthProvider>
    );
};

export {GoogleAuthButton};
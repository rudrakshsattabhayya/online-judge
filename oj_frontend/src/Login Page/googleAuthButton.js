import { React, useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import postMethod from "../Apis/postApi";
import { Navigate, useNavigate } from "react-router-dom";
import useStyles from "./loginpagestyles";

const GoogleAuthButton = () => {
  const [isloading, updateLoadingState] = useState(true);
  const [localAuth, updateLocalAuth] = useState(false);
  const clientId = process.env.REACT_APP_CLIENT_ID
  const css  = useStyles();
  const responseGoogle = async (res) => {
    try {
      const data = await res;
      const decoded_obj = await jwt_decode(data.credential);
      const final_obj = {
        name: decoded_obj.given_name,
        email: decoded_obj.email,
        picture: decoded_obj.picture,
      };
      const response = await postMethod(final_obj, "/Apis/user");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.googlebutton}>
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </GoogleOAuthProvider>
    </div>
  );
};

export { GoogleAuthButton };

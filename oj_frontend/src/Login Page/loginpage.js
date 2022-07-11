import React from "react";
import { GoogleAuthButton } from "./googleAuthButton";
import useStyles from "./loginpagestyles";

const Loginpage = () => {
  const css = useStyles();
  return (
    <>
      <div className={css.loginbox}>
        <div className={css.headingbox}>
          <img className = {css.logoimg} src = "onlinejudgelogo.png" alt="logo"></img>
        </div>
        <div className={css.buttonbox}>
            <h2>Login/ Sign up from Google</h2>
            <div className={css.googlebuttondiv}>
            <GoogleAuthButton />
            </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;

/** @format */
import React from "react";
import "./SplashScreen.css";

export default function SplashScreen() {
  return (
    <div className='splash-screen'>
      <img
        src='https://i.ibb.co/MDq47fx3/logo2.png'
        alt='Логотип'
        className='splash-logo'
      />
      <div className='splash-text'>
        <span>Міністерство</span>
        <span>оборони</span>
        <span>України</span>
      </div>
    </div>
  );
}

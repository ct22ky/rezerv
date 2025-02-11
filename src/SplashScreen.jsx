/** @format */
import React from "react";
import "./SplashScreen.css";

export default function SplashScreen() {
  return (
    <div className='splash-screen'>
      <img src='/logo2.png' alt='Логотип' className='splash-logo' />
      <div className='splash-text'>
        <span>Міністерство</span>
        <span>оборони</span>
        <span>України</span>
      </div>
    </div>
  );
}

/** @format */
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className='header-container'>
      <img
        src='https://upload.wikimedia.org/wikipedia/uk/0/01/Reserve-plus-logo.png'
        alt='Логотип'
        className='logo'
      />

      <button
        className='scan-container'
        onClick={() => alert("Кнопка нажата!")}>
        <div className='scan-text'>
          <span className='scan-first'>Сканувати</span>
          <span className='scan-second'>документ</span>
        </div>
        <img src='/qr.png' alt='QR логотип' className='qr-logo' />
      </button>
    </div>
  );
}

export default Header;

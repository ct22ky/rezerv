/** @format */
import React, { useState } from "react";
import "./Header.css";
import ScanModal from "./ScanModal"; // ✅ Импорт модального окна

function Header() {
  const [isModalOpen, setModalOpen] = useState(false); // ✅ Состояние для модалки

  return (
    <>
      <div className='header-container'>
        <img
          src='https://upload.wikimedia.org/wikipedia/uk/0/01/Reserve-plus-logo.png'
          alt='Логотип'
          className='logo'
        />

        <button className='scan-container' onClick={() => setModalOpen(true)}>
          <div className='scan-text'>
            <span className='scan-first'>Сканувати</span>
            <span className='scan-second'>документ</span>
          </div>
          <img
            src='https://i.ibb.co/vvwJTPnW/qr.png'
            alt='QR логотип'
            className='qr-logo'
          />
        </button>
      </div>

      {/* ✅ Подключаем модалку */}
      <ScanModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default Header;

/** @format */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css"; // Подключаем стили

export default function Settings() {
  const navigate = useNavigate();
  const [isFaceIDEnabled, setFaceIDEnabled] = useState(false); // ✅ По умолчанию выключено

  return (
    <div className='settings-page-container'>
      {/* Кнопка "Назад" */}
      <button className='back-button' onClick={() => navigate(-1)}>
        <img
          src='https://i.ibb.co/pp7ch9S/185-1853839-arrow-pointing-to-the-left-android-back-button-png-removebg-preview.png'
          alt='Назад'
          className='back-icon'
        />
      </button>

      {/* Заголовок страницы */}
      <h1 className='settings-title'>Налаштування</h1>

      {/* Блок настроек */}
      <div className='settings-card'>
        <div className='settings-option'>
          <span>Змінити код для входу</span>
        </div>
        <div className='settings-divider'></div>
        <div className='settings-option'>
          <span>Використовувати Face ID</span>
          <label className='switch'>
            <input
              type='checkbox'
              checked={isFaceIDEnabled}
              onChange={() => setFaceIDEnabled(!isFaceIDEnabled)}
            />
            <span className='slider'></span>
          </label>
        </div>
      </div>
    </div>
  );
}

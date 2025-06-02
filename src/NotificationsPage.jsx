/** @format */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotificationsPage.css"; // Подключаем стили

export default function NotificationsPage() {
  const navigate = useNavigate();

  return (
    <div className='notifications-page-container'>
      {/* Кнопка "Назад" */}
      <button className='back-button' onClick={() => navigate(-1)}>
        <img
          src='https://i.ibb.co/pp7ch9S/185-1853839-arrow-pointing-to-the-left-android-back-button-png-removebg-preview.png'
          alt='Назад'
          className='back-icon'
        />
      </button>

      {/* Заголовок страницы */}
      <h1 className='notifications-title'>Сповіщення</h1>

      {/* 🔥 Первое уведомление */}
      <div className='notification-card primary'>
        <p className='notification-title'>Дані з реєстру Оберіг отримано</p>
        <p className='notification-text'>
          Військово-обліковий документ вже доступний
        </p>
        <hr className='notification-divider' />
        <p className='notification-time'>16.04.2025 о 18:46</p>
      </div>

      {/* 🔥 Второе уведомление */}
      <div className='notification-card secondary'>
        <p className='notification-title'>
          Запит на інформацію з реєстру відправлено
        </p>
        <p className='notification-text'>
          Очікуйте сповіщення про результат обробки запиту
        </p>
        <p className='notification-time'>16.04.2025 о 16:38</p>
      </div>
    </div>
  );
}

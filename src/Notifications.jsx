/** @format */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Notifications.css";

export default function Notifications() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setCurrentTime(formattedTime); // Фиксируем время входа
  }, []);

  return (
    <div className='notifications-container'>
      {/* Кнопка "Назад" */}
      <button className='back-button' onClick={() => navigate(-1)}>
        <img
          src='https://i.ibb.co/pp7ch9S/185-1853839-arrow-pointing-to-the-left-android-back-button-png-removebg-preview.png'
          alt='Назад'
          className='back-icon'
        />
      </button>

      {/* Заголовок */}
      <h1 className='notifications-title'>Активні сесії</h1>

      {/* Карточка текущей сессии */}
      <div className='session-card'>
        <div className='session-header'>
          <span className='status-dot'></span>
          <span className='session-title'>Поточна сесія</span>
        </div>
        <div className='session-info'>iOS 18.1.1</div>
        <div className='session-details'>
          <p>Дата підключення: сьогодні, {currentTime}</p>
          <p>Остання активність: сьогодні, {currentTime}</p>
        </div>
      </div>
    </div>
  );
}

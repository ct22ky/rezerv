/** @format */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Support.css";

export default function Support() {
  const navigate = useNavigate();

  return (
    <div className='support-container'>
      <button className='back-button' onClick={() => navigate(-1)}>
        <img
          src='https://i.ibb.co/pp7ch9S/185-1853839-arrow-pointing-to-the-left-android-back-button-png-removebg-preview.png'
          alt='Назад'
          className='back-icon'
        />
      </button>

      <h1 className='support-title'>Служба підтримки</h1>

      <p className='support-description'>
        Напишіть у чат-бот, якщо у вас виникли проблеми або питання. Працюємо
        цілодобово.
      </p>

      <div className='chat-button'>
        <img
          src='https://i.ibb.co/gLr81YDJ/viber.png'
          alt='Viber'
          className='chat-icon'
        />
        <span>Viber</span>
      </div>

      <hr className='divider' />

      <button className='copy-button'>
        <img
          src='https://static.thenounproject.com/png/361082-200.png'
          alt='Копировать'
          className='copy-icon'
        />
        <span>Копіювати номер пристрою</span>
      </button>
    </div>
  );
}

<span>Копіювати номер пристрою</span>;

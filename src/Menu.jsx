/** @format */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserMenu.css";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className='user-menu-page'>
      <div className='user-menu-container'>
        <h1>Вітаємо, Микита</h1>

        <button
          className='user-menu-item'
          onClick={() => navigate("/notifications")}>
          <span className='user-menu-icon'>
            <img
              src='https://i.ibb.co/xtj1Ws4M/free-icon-notification-9587784.png'
              alt='Сповіщення'
            />
          </span>
          <span>Сповіщення</span>
        </button>

        <button
          className='user-menu-item'
          onClick={() => navigate("/questions-answers")}>
          <span className='user-menu-icon'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/3378/3378645.png'
              alt='Питання'
            />
          </span>
          <span>Питання та відповіді</span>
        </button>

        <button
          className='user-menu-item'
          onClick={() => navigate("/fix-data")}>
          <span className='user-menu-icon'>
            <img
              src='https://i.ibb.co/G3fmSrf5/free-icon-warning-5952645.png'
              alt='Виправити дані'
            />
          </span>
          <span>Виправити дані онлайн</span>
        </button>

        <button
          className='user-menu-item'
          onClick={() => navigate("/active-sessions")}>
          <span className='user-menu-icon'>
            <img
              src='https://i.ibb.co/Y4gndksV/free-icon-apple-15665133.png'
              alt='Активні сесії'
            />
          </span>
          <span>Активні сесії</span>
        </button>

        {/* ✅ Теперь "Налаштування" открывает новый компонент */}
        <button
          className='user-menu-item'
          onClick={() => navigate("/settings")}>
          <span className='user-menu-icon'>
            <img
              src='https://i.ibb.co/MXB7rhp/free-icon-settings-126472.png'
              alt='Налаштування'
            />
          </span>
          <span>Налаштування</span>
        </button>

        <button className='user-menu-item' onClick={() => navigate("/logout")}>
          <span className='user-menu-icon'>
            <img
              src='https://i.ibb.co/CKWZwJ4k/free-icon-sign-out-876779.png'
              alt='Вийти'
            />
          </span>
          <span>Вийти</span>
        </button>

        <div className='user-menu-divider'></div>
        <div className='user-menu-footer-info'>
          <span>Копіювати номер пристрою</span>
          <span>Служба підтримки</span>
          <span>Версія застосунку: 1.5.1</span>
        </div>
      </div>
    </div>
  );
}

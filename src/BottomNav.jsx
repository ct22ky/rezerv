/** @format */
import React from "react";
import { NavLink } from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <div className='bottom-nav'>
      <NavLink to='/vacancies' className='nav-item'>
        <img src='/vakans.png' className='nav-icon' alt='Вакансії' />

        <span>Вакансії</span>
      </NavLink>

      <NavLink to='/my-document' className='nav-item'>
        <img src='/docum.png' className='nav-icon' />
        <span>Мій документ</span>
      </NavLink>

      <NavLink to='/menu' className='nav-item menu-item'>
        <img src='/menus.png' className='nav-icon' />
        <span>Меню</span>
        <span className='notification-dot'></span> {/* Красная точка */}
      </NavLink>
    </div>
  );
}

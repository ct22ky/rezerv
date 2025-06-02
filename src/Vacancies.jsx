/** @format */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Добавил useNavigate
import "./Vacancies.css";

export default function Vacancies() {
  const [hideVacancies, setHideVacancies] = useState(false);
  const navigate = useNavigate(); // ✅ Инициализация навигации

  return (
    <div className='vacancies-container'>
      <div className='header'>
        <h1>Вакансії</h1>
        <button className='help-button' onClick={() => navigate("/support")}>
          <img
            src='https://i.ibb.co/TxjDgzYs/free-icon-interrogation-mark-5592636.png'
            alt='Допомога'
          />
        </button>
      </div>

      <p className='vacancies-description'>
        Тут знаходяться актуальні посади для служби в українському війську,
        надані у співпраці з платформою <b>Lobby X</b>.
      </p>

      <p className='vacancies-text'>
        Це найбільший перелік пропозицій, який допоможе знайти ту, що підходить
        саме вам. Обирайте варіанти, подавайте заявки у кілька кліків і очікуйте
        відповіді від бригади.
      </p>

      <label className='checkbox-container'>
        <input
          type='checkbox'
          checked={hideVacancies}
          onChange={() => setHideVacancies(!hideVacancies)}
        />
        <span>Більше не показувати</span>
      </label>

      <button className='start-button'>Почати</button>
    </div>
  );
}

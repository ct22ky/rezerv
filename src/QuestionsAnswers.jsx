/** @format */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./QuestionsAnswers.css"; // ✅ Подключаем стили

export default function QuestionsAnswers() {
  const navigate = useNavigate();

  const questions = [
    "Чому я бачу лише один тип заявки на виправлення даних?",
    "Як податися на військову вакансію?",
    "Чи потрібно вказувати свій цивільний досвід в резюме?",
    "Яка різниця між мобілізацією і контрактом?",
    "Хто опрацьовує мою заявку про виправлення даних?",
    "Як дізнатися чи пріоритетний/не пріоритетний підрозділ ЗСУ, в який ви подаєтесь?",
  ];

  return (
    <div className='questions-page-container'>
      {/* Кнопка "Назад" */}
      <button className='back-button' onClick={() => navigate(-1)}>
        <img
          src='https://i.ibb.co/pp7ch9S/185-1853839-arrow-pointing-to-the-left-android-back-button-png-removebg-preview.png'
          alt='Назад'
          className='back-icon'
        />
      </button>

      {/* Заголовок страницы */}
      <h1 className='questions-title'>Питання та відповіді</h1>

      {/* Список вопросов */}
      <div className='questions-list'>
        {questions.map((question, index) => (
          <div key={index} className='question-card'>
            <span className='question-text'>{question}</span>
            <span className='question-arrow'>›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

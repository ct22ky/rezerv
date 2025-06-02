/** @format */
import React from "react";
import "./FullInfoModal.css";

export default function FullInfoModal({ isOpen, onClose }) {
  return (
    <div
      className={`full-info-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}>
      <div className='full-info-modal' onClick={(e) => e.stopPropagation()}>
        <div className='modal-drag-handle'></div>

        {/* Заголовок */}
        <div className='modal-header'>
          <div className='modal-title'>
            <h2>Військово</h2>
            <h2>обліковий</h2>
            <h2>документ</h2>
          </div>
          <img
            src='https://i.ibb.co/KjQ9TBy1/rzlg.png'
            alt='Тризуб'
            className='modal-icon'
          />
        </div>

        {/* ✅ Бегущая строка с анимацией */}
        <div className='scrolling-info-bar'>
          <div className='scrolling-info-text'>
            <span>На обліку • Документ оновлено о 11:55 | 12.02.2025 </span>
            <span>На обліку • Документ оновлено о 11:55 | 12.02.2025 </span>
            <span>На обліку • Документ оновлено о 11:55 | 12.02.2025 </span>
            <span>На обліку • Документ оновлено о 11:55 | 12.02.2025 </span>
            <span>На обліку • Документ оновлено о 11:55 | 12.02.2025 </span>
          </div>
        </div>

        {/* ✅ Первый белый блок (ФИО + статус + дата + РНОКПП) */}
        <div className='info-card'>
          <p className='info-name'>БОНДАР Микита Ігорович</p>
          <p className='info-status'>На обліку</p>
          <div className='info-divider'></div>

          <div className='info-row'>
            <p className='info-label'>Дата народження:</p>
            <p className='info-value'>21.05.1995</p>
          </div>

          <div className='info-row'>
            <p className='info-label'>РНОКПП:</p>
            <p className='info-value'>3348014156</p>
          </div>
        </div>

        {/* ✅ Второй белый блок (Отсрочка + тип отсрочки) */}
        <div className='defer-card'>
          <div className='defer-row'>
            <p className='defer-label'>Відстрочка до:</p>
            <p className='defer-value'>08.05.2025</p>
          </div>
          <div className='defer-divider'></div>
          <div className='defer-row'>
            <p className='defer-label'>Тип відстрочки:</p>
            <p className='defer-value'>п.1 ч.3 ст.23</p>
          </div>
        </div>
        {/* ✅ Третий белый блок (Постанова ВЛК + Дата ВЛК) */}
        <div className='vlk-card'>
          <div className='vlk-row'>
            <p className='vlk-label'>Постанова ВЛК:</p>
            <p className='vlk-value'>Придатний</p>
          </div>
          <div className='vlk-row'>
            <p className='vlk-label'>Дата ВЛК:</p>
            <p className='vlk-value'>12.08.2024</p>
          </div>
        </div>
        {/* ✅ Четвёртый белый блок (ТЦК + звание + ВОС + категория + реестр) */}
        <div className='tcc-card'>
          <p className='tcc-title'>ТЦК та СП:</p>
          <p className='tcc-subtitle'>
            Шевченківський районний територіальний центр комплектування та
            соціальної підтримки (Дніпро)
          </p>
          <div className='tcc-divider'></div>

          <div className='tcc-row'>
            <p className='tcc-label'>Звання:</p>
            <p className='tcc-value'>Солдат</p>
          </div>

          <div className='tcc-row'>
            <p className='tcc-label'>ВОС:</p>
            <p className='tcc-value'>879962</p>
          </div>

          <div className='tcc-group'>
            <p className='tcc-label'>Категорія обліку:</p>
            <p className='tcc-value'>Військовозобов'язаний</p>
          </div>

          <div className='tcc-group'>
            <p className='tcc-label'>
              Молодших спеціалістів з медичною освітою,
            </p>
            <p className='tcc-value'>Фельдшер</p>
          </div>

          <div className='tcc-group'>
            <p className='tcc-label'>Номер в реєстрі Оберіг:</p>
            <p className='tcc-value'>190220221425692400006</p>
          </div>
        </div>
        {/* ✅ Пятый белый блок (Телефон + Адрес проживания) */}
        <div className='contact-card'>
          <div className='contact-group'>
            <p className='contact-label'>Телефон:</p>
            <p className='contact-value'>+380 95 147 6977</p>
          </div>

          <div className='contact-group'>
            <p className='contact-label'>Адреса проживання:</p>
            <p className='contact-value'>
              Україна, Дніпропетровська область, м Дніпро, ЖМ Тополя, 1. 18, кв.
              49
            </p>
          </div>
        </div>
        {/* ✅ Шестой белый блок (Дата уточнення даних) */}
        <div className='data-update-card'>
          <div className='data-update-row'>
            <p className='data-update-label'>Дата уточнення даних:</p>
            <p className='data-update-value'>12.11.2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

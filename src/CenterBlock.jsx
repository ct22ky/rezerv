/** @format */
import React from "react";
import "./CenterBlock.css";

function CenterBlock() {
  return (
    <div className='flip-card-container'>
      <div className='flip-card-inner'>
        {/* Передняя сторона – исходный контент */}
        <div className='flip-card-front'>
          <div className='center-block'>
            <p className='center-block-text'>
              <span>Військово-</span>
              <span>обліковий</span>
              <span>документ</span>
            </p>

            <div className='data-info'>
              <div className='data-checkmark'>
                <img
                  src='https://cdn-icons-png.flaticon.com/256/5610/5610944.png'
                  alt='Галочка'
                />
              </div>
              <span className='data-text'>Дані уточнено вчасно</span>
            </div>

            <div className='birth-info'>
              <span className='birth-label'>Дата народження:</span>
              <span className='birth-date'>21.05.1995</span>
            </div>

            <div className='postponement-info'>
              <span className='postponement-label'>Відстрочка до:</span>
              <span className='postponement-date'>31.12.2025</span>
            </div>

            <div className='marquee-container'>
              <div className='marquee-text'>
                <span>На обліку • Документ оновлено о 23:41 | 08.02.2025</span>
                <span>На обліку • Документ оновлено о 23:41 | 08.02.2025</span>
                <span>На обліку • Документ оновлено о 23:41 | 08.02.2025</span>
              </div>
            </div>

            <div className='military-status'>Військовозобов'язаний</div>

            <div className='fio-container'>
              <div className='fio'>
                <span className='fio-item'>Бонадр</span>
                <span className='fio-item'>Микита</span>
                <span className='fio-item'>Ігорович</span>
              </div>

              <button
                className='menu-button'
                onClick={(e) => {
                  e.stopPropagation(); // чтобы клик по кнопке не срабатывал на родительском элементе
                  alert("Кнопка нажата!");
                }}>
                <span className='dots'>• • •</span>
              </button>
            </div>

            <img src='/rzlg.png' alt='Логотип' className='center-block-logo' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterBlock;

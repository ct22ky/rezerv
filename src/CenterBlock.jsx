/** @format */
import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import "./CenterBlock.css";
import FullInfoModal from "./FullInfoModal"; // ✅ Импортируем модальное окно

function CenterBlock() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullInfoOpen, setIsFullInfoOpen] = useState(false); // ✅ Стейт для полного окна
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    let timer;
    if (isFlipped) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      setTimeLeft(180);
    }
    return () => clearInterval(timer);
  }, [isFlipped]);

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <div className='center-block' onClick={() => setIsFlipped(true)}>
          <p className='center-block-text'>
            <span>Військово-</span>
            <span>обліковий</span>
            <span>документ</span>
          </p>

          <div className='birth-info'>
            <span className='birth-label'>Дата народження:</span>
            <span className='birth-date'>21.05.1995</span>
          </div>

          <div className='postponement-info'>
            <span className='postponement-label'>Відстрочка до:</span>
            <span className='postponement-date'>14.08.2025</span>
          </div>

          <div className='marquee-container'>
            <div className='marquee-text'>
              <span>На обліку • Документ оновлено о 11:55 | 16.04.2025</span>
              <span>На обліку • Документ оновлено о 11:55 | 16.04.2025</span>
              <span>На обліку • Документ оновлено о 11:55 | 16.04.2025</span>
              <span>На обліку • Документ оновлено о 11:55 | 16.04.2025</span>
              <span>На обліку • Документ оновлено о 11:55 | 16.04.2025</span>
              <span>На обліку • Документ оновлено о 11:55 | 16.04.2025</span>
            </div>
          </div>

          <div className='military-status'>Військовозобов'язаний</div>

          <div className='fio-container'>
            <div className='fio'>
              <span className='fio-item'>БОНДАР</span>
              <span className='fio-item'>Микита</span>
              <span className='fio-item'>Ігорович</span>
            </div>

            <button
              className='menu-button'
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}>
              <span className='dots'>• • •</span>
            </button>
          </div>

          <img
            src='https://i.ibb.co/KjQ9TBy1/rzlg.png'
            alt='Логотип'
            className='center-block-logo'
          />
        </div>

        <div
          className='center-block back-side'
          onClick={() => setIsFlipped(false)}>
          <p className='scan-subtitle'>Код дійсний до 08.05.2025</p>
          <img
            src='https://i.ibb.co/svLj2v7H/123.jpg'
            alt='QR Scanner'
            className='scan-image'
          />
        </div>
      </ReactCardFlip>

      {/* ✅ Модальное окно с кнопками */}
      <div
        className={`flip-modal-overlay ${isModalOpen ? "open" : ""}`}
        onClick={() => setIsModalOpen(false)}>
        <div
          className='flip-modal-content'
          onClick={(e) => e.stopPropagation()}>
          <div className='flip-modal-drag-handle'></div>

          <button
            className='flip-modal-item'
            onClick={() => {
              setIsModalOpen(false); // ✅ Закрываем старое модальное окно
              setIsFullInfoOpen(true); // ✅ Открываем новое
            }}>
            <img
              src='https://img.icons8.com/?size=100&id=14093&format=png&color=000000'
              alt='Повна інформація'
              className='flip-modal-icon'
            />
            Повна інформація
          </button>

          <button className='flip-modal-item'>
            <img
              src='https://i.ibb.co/fYdPxsVM/free-icon-document-3936484.png'
              alt='Завантажити PDF'
              className='flip-modal-icon'
            />
            Завантажити PDF
          </button>

          <button className='flip-modal-item'>
            <img
              src='https://i.ibb.co/yBGYLDch/free-icon-refresh-2691608.png'
              alt='Оновити документ'
              className='flip-modal-icon'
            />
            Оновити документ
          </button>

          {/* 🔽 Новые кнопки 🔽 */}
          <button className='flip-modal-item'>
            <img
              src='https://i.ibb.co/nqRFr8Gh/free-icon-add-doc-17813624.png'
              alt='Подати запит на відстрочку'
              className='flip-modal-icon'
            />
            Подати запит на відстрочку
          </button>

          <button className='flip-modal-item'>
            <img
              src='https://i.ibb.co/rfFV3yqp/free-icon-plus-16901820.png'
              alt='Направлення на влк '
              className='flip-modal-icon'
            />
            Направлення на влк
          </button>

          <button className='flip-modal-item'>
            <img
              src='https://i.ibb.co/v51HXd0/free-icon-write-6604540.png'
              alt='Уточнити контактні дані'
              className='flip-modal-icon'
            />
            Уточнити контактні дані
          </button>
        </div>
      </div>

      {/* ✅ Полноэкранное модальное окно */}
      <FullInfoModal
        isOpen={isFullInfoOpen}
        onClose={() => setIsFullInfoOpen(false)}
      />
    </>
  );
}

export default CenterBlock;

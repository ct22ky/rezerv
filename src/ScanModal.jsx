/** @format */
import React from "react";
import "./ScanModal.css";

function ScanModal({ isOpen, onClose }) {
  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose} // ✅ Закрытие при клике вне окна
    >
      <div
        className='modal-content'
        onClick={(e) => e.stopPropagation()} // ❌ Блокируем закрытие при клике по модалке
      >
        <div className='modal-handle'></div>

        <h2 className='modal-title'>Який документ потрібно відсканувати?</h2>

        <hr className='modal-divider' />

        <div className='modal-options'>
          <div className='modal-option'>
            <img
              src='https://i.ibb.co/nq5QBFPK/0000-removebg-preview.png'
              alt='QR іконка'
              className='modal-icons'
            />
            <span>QR військово-облікового документа</span>
          </div>

          <div className='modal-option'>
            <img
              src='https://i.ibb.co/pjXg5BGK/000-removebg-preview.png'
              alt='QR іконка'
              className='modal-icons'
            />
            <span>QR паперової повістки</span>
          </div>

          <div className='modal-option'>
            <img
              src='https://i.ibb.co/pjXg5BGK/000-removebg-preview.png'
              alt='QR іконка'
              className='modal-icons'
            />
            <span>QR направлення на ВЛК</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScanModal;

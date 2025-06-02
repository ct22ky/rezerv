/** @format */
import React, { useState } from "react";
import "./PasscodeScreen.css";

export default function PasscodeScreen({ onUnlock }) {
  const [input, setInput] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const correctPasscode = "3589";

  const handleKeyPress = (value) => {
    if (input.length < 4) {
      const newInput = input + value;
      setInput(newInput);

      if (newInput.length === 4) {
        if (newInput === correctPasscode) {
          onUnlock(); // ✅ Разблокируем экран
        } else {
          setIsShaking(true); // ✅ Запускаем анимацию тряски
          setTimeout(() => {
            setIsShaking(false);
            setInput(""); // Очищаем поле
          }, 600);
        }
      }
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className='passcode-container'>
      <h1 className='passcode-title'>Код для входу</h1>
      <div className={`passcode-dots ${isShaking ? "shake" : ""}`}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`dot ${input.length > i ? "filled" : ""}`} />
        ))}
      </div>

      <div className='passcode-grid'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button key={num} className='key' onClick={() => handleKeyPress(num)}>
            {num}
          </button>
        ))}

        {/* ✅ Face ID вместо эмоджи */}
        <button className='key special' disabled>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Face_ID_logo.svg/2048px-Face_ID_logo.svg.png'
            alt='Face ID'
            className='face-id-icon'
          />
        </button>

        <button className='key' onClick={() => handleKeyPress(0)}>
          0
        </button>

        {/* ✅ Удаление с иконкой */}
        <button className='key special' onClick={handleDelete}>
          <img
            src='https://i.ibb.co/tgK2x8y/free-icon-delete-159805.png'
            alt='Удалить'
            className='delete-icon'
          />
        </button>
      </div>

      <p className='forgot-passcode'>Не пам'ятаю код для входу</p>
    </div>
  );
}

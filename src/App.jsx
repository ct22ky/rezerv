/** @format */
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Header";
import BottomNav from "./BottomNav";
import CenterBlock from "./CenterBlock";
import Vacancies from "./Vacancies";
import Menu from "./Menu";
import SplashScreen from "./SplashScreen";
import FaceIDScreen from "./FaceIDScreen";

function App() {
  const [stage, setStage] = useState("loading");

  useEffect(() => {
    setTimeout(() => {
      setStage("faceid"); // Показываем Face ID
      setTimeout(() => {
        setStage("ready"); // Через 2 сек. убираем размытие
      }, 2000);
    }, 1500);
  }, []);

  return (
    <Router>
      <div className='app-wrapper'>
        {/* Splash Screen (первый экран) */}
        {stage === "loading" && <SplashScreen />}

        {/* Face ID (должно быть видно только оно) */}
        {stage === "faceid" && <FaceIDScreen />}

        {/* Основное приложение (скрываем, пока не пройдёт Face ID) */}
        {stage !== "loading" && (
          <div
            className={`app-container ${
              stage === "faceid" ? "blur-background" : ""
            }`}>
            <Header />
            <Routes>
              <Route path='/' element={<CenterBlock />} />
              <Route path='/my-document' element={<CenterBlock />} />
              <Route path='/vacancies' element={<Vacancies />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <BottomNav />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

/** @format */
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import BottomNav from "./BottomNav";
import CenterBlock from "./CenterBlock";
import Vacancies from "./Vacancies";
import Menu from "./Menu";
import SplashScreen from "./SplashScreen";
import Header from "./Header";
import Support from "./Support";
import Notifications from "./Notifications";
import NotificationsPage from "./NotificationsPage";
import QuestionsAnswers from "./QuestionsAnswers";
import Settings from "./Settings";
import PasscodeScreen from "./PasscodeScreen"; // ✅ Новый импорт

function App() {
  const [stage, setStage] = useState("loading");
  const [isUnlocked, setIsUnlocked] = useState(false); // Стейт для блокировки

  useEffect(() => {
    setTimeout(() => {
      setStage("passcode"); // После загрузки открываем ввод кода
    }, 1500);
  }, []);

  return (
    <Router basename='/rezerv'>
      {stage === "loading" ? (
        <SplashScreen />
      ) : stage === "passcode" && !isUnlocked ? (
        <PasscodeScreen onUnlock={() => setIsUnlocked(true)} />
      ) : (
        <AppContent />
      )}
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const showHeader =
    location.pathname === "/" || location.pathname === "/my-document";

  const hideBottomNav =
    location.pathname === "/rezerv/active-sessions" ||
    location.pathname === "/rezerv/notifications" ||
    location.pathname === "/rezerv/questions-answers" ||
    location.pathname === "/rezerv/settings";

  return (
    <div className='app-wrapper'>
      {showHeader && <Header />}
      <Routes>
        <Route path='/' element={<CenterBlock />} />
        <Route path='/my-document' element={<CenterBlock />} />
        <Route path='/vacancies' element={<Vacancies />} />
        <Route path='/support' element={<Support />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/active-sessions' element={<Notifications />} />
        <Route path='/notifications' element={<NotificationsPage />} />
        <Route path='/questions-answers' element={<QuestionsAnswers />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      {!hideBottomNav && <BottomNav />}
    </div>
  );
}

export default App;

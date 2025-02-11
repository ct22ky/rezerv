/** @format */
import React, { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animations/faceid.json"; // ✅ Импортируем JSON

import "./FaceIDScreen.css";

export default function FaceIDScreen() {
  const animationRef = useRef(null);

  return (
    <div className='faceid-screen'>
      <Lottie
        animationData={animationData}
        loop={false}
        className='faceid-animation'
        lottieRef={animationRef}
      />
    </div>
  );
}

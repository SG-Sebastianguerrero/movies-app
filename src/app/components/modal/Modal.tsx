"use client";

import { useState } from "react";
import styles from "./modal.module.css";
import Image from "next/image";
const Modal = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [operation, setOperation] = useState("login");

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div className={`${styles.modal} ${isVisible ? "fadeIn" : "fadeOut"}`}>
      <div className={styles.modal_form}>
        <button onClick={closeModal} className={styles.btn_back}>
          <Image
            className={styles.modal_img}
            src="/icons/back.svg"
            width={20}
            height={20}
            alt="back button"
          />
          Back
        </button>
        <div>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
      <div className={styles.modal_iniciative}>
        Welcome to Quickbet Movies!
        <p>
          🎬 Ready to unlock a universe of cinematic delights? Sign up now and
          start your journey with us!
        </p>
        <Image
          src={"/assets/hero_login.png"}
          alt="onboarding image man talking"
          width={546}
          height={609}
        />
      </div>
    </div>
  );
};

export default Modal;

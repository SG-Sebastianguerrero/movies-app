"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./modal.module.css";
import Image from "next/image";

export interface PropsInfo {
  paragraph: string;
  url: string;
  name: string;
}

const Login = () => {
  return (
    <>
      <span className={styles.label_support}>We love having you back</span>
      {/* TODO */}
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button
        type="submit"
        className={`${styles.btn_primary} ${styles.btn_send_email}`}
      >
        Continue
        <Image
          src="/icons/cupon.svg"
          width={16}
          height={16}
          alt="envelope logo"
        />
      </button>
    </>
  );
};

const Register = () => {
  return (
    <button
      type="button"
      className={`${styles.btn_primary} ${styles.btn_send_email}`}
    >
      Register with your Email
      <Image
        src="/icons/envelope.svg"
        width={16}
        height={16}
        alt="envelope logo"
      />
    </button>
  );
};

interface PropsOnBoarding {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const OnBoarding = ({ isVisible, setIsVisible }: PropsOnBoarding) => {
  const pagesInfo: PropsInfo[] = [
    {
      name: "register",
      paragraph:
        "🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!",
      url: "/assets/hero_register.png",
    },
    {
      name: "login",
      paragraph:
        "🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!",
      url: "/assets/hero_login.png",
    },
  ];

  const [operation, setOperation] = useState<PropsInfo>({ ...pagesInfo[0] });

  const closeModal = () => {
    setIsVisible(false);
  };

  const changeOperation = (type: string) => {
    if (type === "login") {
      setOperation({ ...pagesInfo[1] });
    }
    if (type === "register") {
      setOperation({ ...pagesInfo[0] });
    }
  };

  return (
    <div className={`${styles.modal} ${isVisible ? "fadeIn" : "fadeOut"}`}>
      <div className={styles.modal_left}>
        <button onClick={closeModal} className={styles.btn_back}>
          <Image
            src="/icons/back.svg"
            width={20}
            height={20}
            alt="back button"
          />
          Back
        </button>
        <form className={styles.modal_form}>
          <div className={styles.modal_form_buttons}>
            <button
              type="button"
              className={`${
                operation?.name === "register"
                  ? styles.btn_primary
                  : styles.btn_secondary
              }`}
              onClick={() => changeOperation("register")}
            >
              Sign Up
            </button>
            <button
              type="button"
              className={`${
                operation?.name === "login"
                  ? styles.btn_primary
                  : styles.btn_secondary
              }`}
              onClick={() => changeOperation("login")}
            >
              Login
            </button>
          </div>

          {operation?.name === "login" ? <Login /> : <Register />}

          <span className={styles.label_support}>
            For any questions, reach out to support@Quickbetdmovies.com
          </span>
        </form>
      </div>
      <div className={styles.modal_iniciative}>
        <h3>Welcome to Quickbet Movies!</h3>
        <p>{operation.paragraph}</p>
        <Image
          src={operation.url}
          alt="onboarding image man talking"
          width={540}
          height={408}
        />
      </div>
    </div>
  );
};

export default OnBoarding;

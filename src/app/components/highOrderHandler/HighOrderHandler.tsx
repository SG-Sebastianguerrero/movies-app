"use client";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import OnBoarding from "../onBoarding/OnBoarding";

interface PropsHighOrderHandler {
  showAdvertising?: boolean;
}

const HighOrderHandler = ({
  showAdvertising = false,
}: PropsHighOrderHandler) => {
  const [isVisible, setIsVisible] = useState(true);

  const openOnboardingModal = () => {
    setIsVisible(true);
  };

  return (
    <>
      <Navbar openOnboardingModal={openOnboardingModal} />
      {showAdvertising && (
        <OnBoarding isVisible={isVisible} setIsVisible={setIsVisible} />
      )}
    </>
  );
};

export default HighOrderHandler;

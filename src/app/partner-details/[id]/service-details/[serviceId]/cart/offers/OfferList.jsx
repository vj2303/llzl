"use client";

import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../../../../../../../redux/store";
import OfferCard from "./OfferCard";
import Confetti from "react-confetti";

const OfferList = ({ offers }) => {
  const [showConfetti, setShowConfetti] = useState(false); // State to control confetti visibility
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleApplyOffer = () => {
    setShowConfetti(true); // Trigger confetti

    // Stop confetti after a short duration
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  return (
    <Provider store={store}>
      <div className="mt-[100px] relative">
        {/* Show Confetti when an offer is applied */}
        {showConfetti && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={300}
            recycle={false}
            gravity={0.2}
          />
        )}
        {offers?.map((offer) => (
          <OfferCard offer={offer} key={offer.id} onApply={handleApplyOffer} />
        ))}
      </div>
    </Provider>
  );
};

export default OfferList;

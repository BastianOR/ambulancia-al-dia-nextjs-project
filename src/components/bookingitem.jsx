"use client";
import "../styles/booking.css";
import { CircleUserRound, Phone, Accessibility, Check } from "lucide-react";
import { useState } from "react";

export default function BookingItem({ address, time, patient, contact, tools }) {

  const [currentBottom, setCurrentBottom] = useState("booking-item-hide");

  const handleClick = () => {
    if (currentBottom == "booking-item-hide") {
      setCurrentBottom("booking-item-show");
    } else {
      setCurrentBottom("booking-item-hide");
    }
  };

  return (
    <div className="booking-item">
      <div className="booking-item-top" onClick={handleClick}>
        <h2>{address}</h2>
        <h3>{time}</h3>
      </div>
      <div className={"booking-item-bottom " + currentBottom}>
        <div className="booking-item-data">
          <CircleUserRound size={16} />
          <span>{patient}</span>
        </div>
        <div className="booking-item-data">
          <Phone size={16} />
          <span>{contact}</span>
        </div>
        <div className="booking-item-data">
          <Accessibility size={16} />
          <span>{tools}</span>
        </div>
        <button>Traslado completado</button>
      </div>
    </div>
  );
}

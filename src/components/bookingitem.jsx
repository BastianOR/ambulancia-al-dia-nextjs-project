import "@/styles/booking.css";
import { CircleUserRound, Phone, Accessibility, Check } from "lucide-react";
import { useState } from "react";

export default function BookingItem() {
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
        <h2>Genaro Gallo con Tomas Bunilla</h2>
        <h3>18:24</h3>
      </div>
      <div className={"booking-item-bottom " + currentBottom}>
        <div className="booking-item-data">
          <CircleUserRound size={16} />
          <span>Maria José Quintanilla</span>
        </div>
        <div className="booking-item-data">
          <Phone size={16} />
          <span>+56 9 4118 5969</span>
        </div>
        <div className="booking-item-data">
          <Accessibility size={16} />
          <span>Silla de ruedas</span>
        </div>
        <button>Traslado completado</button>
      </div>
    </div>
  );
}

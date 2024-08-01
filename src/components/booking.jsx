"use client";
import "@/styles/booking.css";
import BookingItem from "./bookingitem";
import { useEffect } from "react";

export default function Booking({ qday, qmonth }) {

  const query = "/api/v1/agenda?scheduler=day=" + qday + "&month=" + qmonth + "&completed=false";

  useEffect(() => {
    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  }, [query]);

  return (
    <div className="Booking">
      <BookingItem />
    </div>
  );
}

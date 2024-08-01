"use client";
import "@/styles/booking.css";
import BookingItem from "./bookingitem";
import { useEffect, useState } from "react";

export default function Booking({ qday, qmonth }) {
  
  const query = "/api/v1/agenda?scheduler=day=" + qday + "&month=" + qmonth + "&completed=false";

  const [bookitems, setBookitems] = useState([]);

  useEffect(() => {
    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        setBookitems(data);
      });
  }, [query]);

  return (
    <div className="Booking">
      {bookitems.map((item, index) => (
        <BookingItem
          key={index}
          address={item.address}
          time={item.time}
          patient={item.patient}
          contact={item.contact}
          tools={item.tools}
        />
      ))}
    </div>
  );
}

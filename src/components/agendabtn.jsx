"use client";
import "@/styles/home.css";
import { todaysDate, todaysMonth } from "@/lib/dateutils";

/* This is a client component which returns a button that redirects the user to the agenda page, 
while also taking into account the user's current date. */
export default function AgendaButton() {

  const day = todaysDate();
  const month = todaysMonth();

  const redirectToUrl = (dayarg, montharg) => {
    window.location.assign(`/agenda?day=${dayarg}&month=${montharg}`);
  }

  return (
    <button className="cta-btn" onClick={() => {redirectToUrl(day, month)}}>Abrir agenda</button>
  );
}

"use client";
import { useSearchParams } from "next/navigation";
import "@/styles/agenda.css";
import DaySelect from "@/components/shadimpl/dayselect";
import MonthSelect from "@/components/shadimpl/monthselect";
import Link from "next/link";
import Booking from "@/components/booking";

export default function AgendaPage() {

  const params = useSearchParams();
  const queryday = params.get("day");
  const querymonth = params.get("month");

  return (
    <div className="AgendaPage">
        <h1>Agenda</h1>
        <p>Estás viendo la agenda del:<br />{queryday} de {querymonth}</p>
        <div className="date-picker">
          <DaySelect defaultDay={queryday} />
          <div className="select-separator"></div>
          <MonthSelect defaultMonth={querymonth} />
        </div>
        <button className="cta-btn">Cambiar fecha</button>
        <div className="add-button-container">
          <Link href={"/nueva-agenda"}><button className="secondary-btn">+ Nuevo traslado</button></Link>
        </div>
        <Booking qday={queryday} qmonth={querymonth}/>
    </div>
  );
}

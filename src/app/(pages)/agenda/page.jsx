"use client";
import { useSearchParams } from "next/navigation";
import "../../../styles/agenda.css";
import DaySelect from "../../../components/shadimpl/dayselect";
import MonthSelect from "../../../components/shadimpl/monthselect";
import Link from "next/link";
import Booking from "../../../components/booking";
import { useState } from "react";

export default function AgendaPage() {

  const params = useSearchParams();
  const queryday = params.get("day");
  const querymonth = params.get("month");

  const [ chosenday, setChosenday ] = useState(queryday);
  const [ chosenmonth, setChosenmonth ] = useState(querymonth);

  function onSelectDay(value){
    setChosenday(value);
  }

  function onSelectMonth(value){
    setChosenmonth(value);
  }

  return (
    <div className="AgendaPage">
        <h1>Agenda</h1>
        <p>Estás viendo la agenda del:<br />{queryday} de {querymonth}</p>
        <div className="date-picker">
          <DaySelect defaultDay={queryday} onDayChange={onSelectDay} />
          <div className="select-separator"></div>
          <MonthSelect defaultMonth={querymonth} onMonthChange={onSelectMonth} />
        </div>
        <Link href={"/agenda?day=" + chosenday + "&month=" + chosenmonth}><button className="cta-btn">Cambiar fecha</button></Link>
        <div className="add-button-container">
          <Link href={"/nueva-agenda"}><button className="secondary-btn">+ Nuevo traslado</button></Link>
        </div>
        <Booking qday={queryday} qmonth={querymonth}/>
    </div>
  );
}

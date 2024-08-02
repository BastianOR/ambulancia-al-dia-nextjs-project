"use client";
import DaySelect from "../../../components/shadimpl/dayselect";
import MonthSelect from "../../../components/shadimpl/monthselect";
import TimeSelect from "../../../components/shadimpl/timeselect";
import "../../../styles/nueva-agenda.css";
import Link from "next/link";
import { todaysDate, todaysMonth } from "../../../lib/dateutils";
import ToolSelect from "../../../components/shadimpl/toolselect";
import { useState } from "react";
import { buildTransfer, postNewTransfer } from "../../../lib/transferbuilder";
import { useRouter } from "next/navigation";

export default function NuevaAgenda() {

  const router = useRouter();

  /* Code to redirect correctly upon cancelling the form: */
  const today = todaysDate();
  const tomonth = todaysMonth();
  const redirectLink = "/agenda?day=" + today + "&month=" + tomonth + "";

  /* States to be used by the form: */
  const [address, setAddress] = useState("");
  const [patient, setPatient] = useState("");
  const [contact, setContact] = useState("");
  const [chosenday, setChosenday] = useState(today);
  const [chosenmonth, setChosenmonth] = useState(tomonth);
  const [chosentime, setChosentime] = useState("06:00");
  const [chosentool, setChosentool] = useState("-");
  /* States for validation messages: */
  const [ formmsg, setFormmsg ] = useState();
  const [addressmsg, setAddressmsg] = useState();
  const [patientmsg, setPatientmsg] = useState();
  const [contactmsg, setContactmsg] = useState();

  /* Code to keep the states updated to the written and selected values in the form: */
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePatientChange = (e) => {
    setPatient(e.target.value);
  };
  const handleContactChange = (e) => {
    setContact(e.target.value);
  };
  function onSelectDay(value) {
    setChosenday(value);
  }
  function onSelectMonth(value) {
    setChosenmonth(value);
  }
  function onSelectTime(value) {
    setChosentime(value);
  }
  function onSelectTool(value) {
    setChosentool(value);
  }

  /* Even upon submitting the form: */
  const handleSubmit = (e) => {
    /* Validation logic: */
    e.preventDefault();
    let passedValidation = false;
    if (address.length < 5 || address.length > 70) {
      setAddressmsg("Ingresa una dirección válida.");
      passedValidation = false;
    } else {
      setAddressmsg("");
      passedValidation = true;
    }

    if (patient.length < 5 || patient.length > 120) {
      setPatientmsg("Ingresa un nombre válido para el paciente.");
      passedValidation = false;
    } else {
      setPatientmsg("");
      passedValidation = true;
    }

    if (contact.length < 6 || contact.length > 30) {
      setContactmsg("Ingresa un número de teléfono válido");
      passedValidation = false;
    } else {
      setContactmsg("");
      passedValidation = true;
    }

    /* If passedValidation is true, then add all states to an object. */
    if (passedValidation) {
      const newTransfer = buildTransfer(
        address,
        patient,
        contact,
        chosenday,
        chosenmonth,
        chosentime,
        chosentool
      );
      postNewTransfer(newTransfer);
      router.push("/onsuccess");
    } else {
      setFormmsg("Compruebe que los datos son correctos.");
    }
  };

  /* JSX for the page and its form: */
  return (
    <div className="NuevaAgenda">
      <main>
        <h1>Nuevo traslado</h1>
        <p>Para agendar un nuevo traslado, complete el formulario.</p>
        <p className="form-error-msg">{formmsg}</p>
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="address">Dirección</label>
          <p className="form-error-msg">{addressmsg}</p>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleAddressChange}
            placeholder="Ej: Manuel Bulnes 3469"
          />
          <label htmlFor="patient">Paciente</label>
          <p className="form-error-msg">{patientmsg}</p>
          <input
            type="text"
            name="patient"
            value={patient}
            onChange={handlePatientChange}
            placeholder="Ej: Daniela Gutierrez"
          />
          <label htmlFor="contact">Contacto</label>
          <p className="form-error-msg">{contactmsg}</p>
          <input
            type="text"
            name="contact"
            value={contact}
            onChange={handleContactChange}
            placeholder="Ej: +56 941431272"
          />
          <label htmlFor="">Fecha</label>
          <div className="date-picker-form">
            <DaySelect defaultDay={today} onDayChange={onSelectDay} />{" "}
            <div className="px-2 flex items-center text-lg">de</div>{" "}
            <MonthSelect defaultMonth={tomonth} onMonthChange={onSelectMonth} />
          </div>
          <label htmlFor="">Hora</label>
          <TimeSelect onHourChange={onSelectTime} />
          <label htmlFor="">Necesita:</label>
          <ToolSelect onToolChange={onSelectTool} />
          <div className="form-btns">
            {/*<input type="submit" value="Registrar" className="cta-btn" />*/}
            <button type="submit" className="cta-btn">
              Registrar
            </button>
            <Link href={redirectLink}>
              <button className="cancel-btn">Cancelar</button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}

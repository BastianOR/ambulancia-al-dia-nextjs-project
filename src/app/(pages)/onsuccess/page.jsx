import Link from "next/link";
import "../../../styles/successpage.css";
import { todaysDate, todaysMonth } from "../../../lib/dateutils";
import { CircleCheck } from 'lucide-react';

export default function OnSuccessPage() {

  const today = todaysDate();
  const tomonth = todaysMonth();
  const redirectWithQuery = "/agenda?day=" + today + "&month=" + tomonth + "";

  return (
    <div className="OnSuccessPage">
      <CircleCheck size={90} color="#65a30d" />
      <h2>Traslado agendado</h2>
      <Link href={redirectWithQuery}><button>Volver a la agenda</button></Link>
    </div>
  );
}

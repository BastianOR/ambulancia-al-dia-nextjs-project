"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AgendaPage() {

  const params = useSearchParams();
  const queryday = params.get("day");
  const querymonth = params.get("month");

  return (
    <div className="AgendaPage">
        <h1>Im Pomu!</h1>
        <p>Today is {queryday} of {querymonth}</p>
    </div>
  );
}

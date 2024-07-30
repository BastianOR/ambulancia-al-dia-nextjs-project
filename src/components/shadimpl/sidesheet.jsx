"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import { SignOutButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { todaysMonth, todaysDate } from "@/lib/dateutils";
import Link from "next/link";

export default function SideSheet() {

  //Get the date and month
  const today = todaysDate();
  const tomonth = todaysMonth();

  //fetch the current user's username and store it
  const [currentUsername, setCurrentUsername] = useState("");

  useEffect(() => {
    fetch("/api/v1/currentuser")
      .then((res) => res.json())
      .then((data) => {
        const name = data.username.currentUsername;
        setCurrentUsername(name);
      });
  }, []);

  return (
    <div className="SideSheet">
      <Sheet>
        <SheetTrigger>
          <AlignLeft />
        </SheetTrigger>
        <SheetContent side="left" className="w-[320px] sm:w-[620px]">
          <SheetHeader>
            {/* When signed in, see the username, else, you're called Guest in spanish */}
            <SheetTitle>
              <SignedIn>{currentUsername}</SignedIn>
              <SignedOut><h3>Invitado</h3></SignedOut>
            </SheetTitle>
            <SheetDescription>
              {/* When signed in, you can sign out. Else, receive a message to sign in. */}
              <SignedIn>
                <SignOutButton>
                  <span className="text-cyan-600 hover:cursor-pointer">Salir</span>
                </SignOutButton>
              </SignedIn>
              <SignedOut>Entra a tu cuenta para agendar traslados.</SignedOut>
            </SheetDescription>
          </SheetHeader>
          {/* A series of links, including one that goes to today's booking: */}
          <div className="side-menu-links">
            <Link href={"/"}>Inicio</Link>
            <Link href={`/agenda?day=${today}&month=${tomonth}`}>Agenda</Link>
            <Link href={"/completados"}>Completados</Link>
            <a href={"/"}>Repositorio</a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

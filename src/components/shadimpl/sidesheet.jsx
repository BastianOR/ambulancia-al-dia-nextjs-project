"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { AlignLeft } from "lucide-react";
import { SignOutButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { todaysMonth, todaysDate } from "../../lib/dateutils";
import Link from "next/link";
import { Github } from "lucide-react";
import { ListCheck } from "lucide-react";
import { Calendar } from "lucide-react";
import { House } from "lucide-react";

export default function SideSheet() {
  //Get the date and month
  const today = todaysDate();
  const tomonth = todaysMonth();

  //fetch the current user's username and store it to render it later
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
          <AlignLeft size={42} strokeWidth={3} color="#777e81" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[320px] sm:w-[620px]">
          <SheetHeader>
            {/* When signed in, see the username, else, you're called Guest in spanish */}
            <SheetTitle>
              <div className="mt-3"></div>
              <SignedIn>
                <span className="text-2xl">{currentUsername}</span>
              </SignedIn>
              <SignedOut>
                <h3 className="text-2xl">Invitado</h3>
              </SignedOut>
            </SheetTitle>
            <SheetDescription>
              {/* When signed in, you can sign out. Else, receive a message to sign in. */}
              <SignedIn>
                <SignOutButton>
                  <span className="text-cyan-600 hover:cursor-pointer text-lg">
                    Salir
                  </span>
                </SignOutButton>
              </SignedIn>
              <SignedOut>Entra a tu cuenta para agendar traslados.</SignedOut>
            </SheetDescription>
          </SheetHeader>
          {/* A series of links, including one that goes to today's booking: */}
          <div className="side-menu-links">
            <span>
              <SheetClose asChild>
                <Link href={"/"}>
                  <House />
                  <b>Inicio</b>
                </Link>
              </SheetClose>
            </span>
            <span>
              <SheetClose asChild>
                <Link href={`/agenda?day=${today}&month=${tomonth}`}>
                  <Calendar />
                  <b>Agenda</b>
                </Link>
              </SheetClose>
            </span>
            <span>
              <SheetClose asChild>
                <Link href={"/completados"}>
                  <ListCheck />
                  <b>Completados</b>
                </Link>
              </SheetClose>
            </span>
            <span>
              <SheetClose asChild>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={
                    "https://github.com/BastianOR/ambulancia-al-dia-nextjs-project"
                  }
                >
                  <Github />
                  <b>Repositorio</b>
                </a>
              </SheetClose>
            </span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

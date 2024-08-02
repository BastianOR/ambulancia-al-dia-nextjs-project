import AgendaButton from "../components/agendabtn";
import {
  SignUpButton,
  SignInButton,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="Landing">
      <main>
        <h1>Ambulancia al Día</h1>
        <p>
          Tu aplicación para agendar traslados en ambulancia.
        </p>
        <div className="landing-bottom">
          <SignedOut>
            <div className="home-clerk-btns">
              <SignUpButton mode="modal">
                <button>Regístrate</button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button>Ingresa</button>
              </SignInButton>
            </div>
          </SignedOut>
          <SignedIn>
            <AgendaButton />
          </SignedIn>
        </div>
      </main>
    </div>
  );
}

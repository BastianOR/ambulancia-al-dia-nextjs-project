import AgendaButton from "@/components/agendabtn";
import {
  SignUpButton,
  SignInButton,
  SignedOut,
  SignedIn,
  SignIn,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="Landing">
      <main>
        <h1>Ambulancia al Día</h1>
        <p>
          Tu aplicación para agendar traslados en ambulancia, fácil y gratis.
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

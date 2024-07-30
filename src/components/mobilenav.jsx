import { SignInButton, UserButton } from "@clerk/nextjs";
import SideSheet from "./shadimpl/sidesheet";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function MobileNav() {
  return (
    <nav>
      <div className="wrapper">
        <SideSheet />
        <div className="nav-right-side">
            <SignedIn>
            <UserButton/></SignedIn>
            <SignedOut>
                <SignInButton mode="modal">Ingresar</SignInButton>
            </SignedOut>
        </div>
      </div>
    </nav>
  );
}

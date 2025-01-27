import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Foot from "../components/foot";
import MobileNav from "../components/mobilenav";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Traslados al Día",
  description: "Tu aplicación para agendar traslados de ambulancia.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <MobileNav/>
          {children}
          <Foot/>
        </body>
      </html>
    </ClerkProvider>
  );
}

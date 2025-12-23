
import "../styles/globals.css";
import Nav from "../components/Nav";
import { ReactNode } from "react";

export const metadata = {
  title: "Kali Terminal | Kanhaiya Tiwari",
  description: "DevOps & Cloud Engineer Portfolio"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}

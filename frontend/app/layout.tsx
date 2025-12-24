
import "../styles/globals.css";
import Nav from "../components/Nav";
import { ReactNode } from "react";
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata = {
  title: "Kali Terminal | Kanhaiya Tiwari",
  description: "DevOps & Cloud Engineer Portfolio"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${robotoMono.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}

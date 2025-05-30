import { Geist, Geist_Mono,Rancho } from "next/font/google";
import "./globals.css";
import { Lobster_Two } from 'next/font/google';
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  
});

const poppins = Poppins({
  weight: "400", // '400' = regular
  subsets: ["latin"],
  variable: "--font-poppins",
});


const rancho = Rancho({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rancho',
})
const lobsterTwo = Lobster_Two({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobsterTwo',
});

export const metadata = {
  title: "Tweet",
  description: "Restaurent E-Commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${rancho.variable} ${lobsterTwo.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

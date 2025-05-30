import {
  Geist,
  Geist_Mono,
  Rancho,
  Poppins,
  Lobster_Two,
} from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const rancho = Rancho({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rancho",
});

const lobsterTwo = Lobster_Two({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobsterTwo",
});

export const metadata = {
  title: "Profile - Tweet",
  description: "User profile dashboard",
};

export default function ProfileLayout({ children }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${rancho.variable} ${lobsterTwo.variable} antialiased`}
    >
      <div className="flex  overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-hidden">{children}</main>
      </div>
    </div>
  );
}

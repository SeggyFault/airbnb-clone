import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/Navbar";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal actionLabel="Submit" title="Hello Modal" isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

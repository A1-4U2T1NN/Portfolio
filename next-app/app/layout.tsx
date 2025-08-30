import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Chigazo Graham – Portfolio",
  description: "Personal portfolio showcasing projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#121212" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


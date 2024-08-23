import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ciseco",
  description: "Created by NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className} data-theme="light">
      {children}
      <Footer/>
      </body>
    </html>
  );
}

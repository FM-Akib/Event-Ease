import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EventEase",
  description: "A hall booking site for upcoming events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
       <div className="pt-20">
        {children}
        </div>
        </body>
    </html>
  );
}

import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "../providers";
import { Session } from "inspector";
import Navigation from "@/components/Navigation";
import AdminNavigation from "@/components/AdminNavigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={inter.className}>
        <NextAuthProvider>
          <div>
            <AdminNavigation />
            {children}
            <Footer />
          </div>
        </NextAuthProvider>
      </div>
    </div>
  );
}
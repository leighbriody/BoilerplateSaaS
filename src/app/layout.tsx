import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PrelineLoader from "@/components/PrelineLoader";

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
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <PrelineLoader />
          {/* <Navigation /> */}
          <NavBar />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}

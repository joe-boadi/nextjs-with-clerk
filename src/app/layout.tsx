import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import ContextProvider from "./context";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Crash Course",
  description: "All Concept covered, clerk for auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ContextProvider>
            <header className="bg-slate-900 text-white p-4 text-center">
              <h1 className="m-1">Next.JS Crash Course</h1>
              <Navigation />
            </header>
            {children}
            <footer className="bg-slate-900 text-white p-4 text-center bottom-0">
              joe-boadi &copy; 2024
            </footer>
          </ContextProvider>
        </body>

        {/*  */}
      </html>
    </ClerkProvider>
  );
}

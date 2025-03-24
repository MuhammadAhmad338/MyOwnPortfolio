"use client" 
import "./globals.css";
import NavBar from "./components/Header";
import ServerLayout from "./serverlayout";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { ReduxProvider } from "./Provider/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Prevent Hydration Mismatch
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <ServerLayout>
      <html lang="en" className={poppins.className}>
        <body className="antialiased flex flex-col items-center justify-center sm:pt-20 pt-20 px-2 sm:px-4 md:px-4">
          <ReduxProvider>
            <NavBar />
            {children}
          </ReduxProvider>
        </body>
      </html>
    </ServerLayout>
  );
}

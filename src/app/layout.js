import React from "react";
import { cookies } from 'next/headers';
import ThemeProvider from "@/components/ThemeProvider";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Snake",
  description: "The classic game.",
};

export default async function RootLayout({ children }) {

  const savedTheme = await cookies().get('color-theme');
  const theme = savedTheme?.value || 'light';

  return (
    <ThemeProvider>
      <html lang="en" data-color-theme={theme}>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}

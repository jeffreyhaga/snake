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

export default function RootLayout({ children }) {

  const savedTheme = cookies().get('color-theme');
  const theme = savedTheme?.value || 'light';

  //const themeColors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;

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

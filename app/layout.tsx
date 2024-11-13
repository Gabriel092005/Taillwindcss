import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SideBar } from "./src/components/sidebar";

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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen grid grid-cols-[minmax(18rem,20rem)_1fr]">
          <SideBar/>
        <main className="px-8 pb-12 pt-8">
        {children}
        </main>
        </div>
      </body>
    </html>
  );
}

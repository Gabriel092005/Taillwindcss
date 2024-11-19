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
        <div className="min-h-screen lg:grid lg:grid-cols-[minmax(5rem,20rem)_1fr]">
          <SideBar/>
        <main className="px-4 lg:col-start-2 pb-12 pt-24 lg:pt-8 lg:px-8 max-w-screen-sm">
        {children}
        </main>
        </div>
      </body>
    </html>
  );
}

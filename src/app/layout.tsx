import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JAGS",
  description: "A portfolio website for Jaegar Saunders",
};

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
        {children}
        <footer className="flex flex-col justify-center items-center gap-2 border-t-2 border-white p-10">
          <h1 className="text-2xl text-white font-semibold">Jaegar Saunders</h1>
          <ul className="list-none flex gap-2">
            <li className="">
              {/* add my linked in once its unlocked */}
              <a className="text-gray-400 hover:text-amber-400 font-medium decoration-0" href='#' target='_blank'>LinkedIn</a>
            </li>
            <li className="">
              <a className="text-gray-400 hover:text-blue-400 font-medium decoration-0" href='https://github.com/jaegarsaun' target='_blank'>Github</a>
            </li>
            <li className="">
              <a className="text-gray-400 hover:text-red-400 font-medium decoration-0" href='mailtto:jaegarls@icloud.com' target='_blank'>Email</a>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}

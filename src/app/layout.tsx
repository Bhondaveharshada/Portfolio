import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const OutFit = Outfit({
  subsets: ["latin"],
  weight: ['400','500','600','700']
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ['400']
});



export const metadata: Metadata = {
  title: "Portfolio-SoftwareEngineer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${OutFit.className} ${ovo.className} antialiased leading-6 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

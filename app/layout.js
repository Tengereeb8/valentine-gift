import { Great_Vibes, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "To My Forever Valentine",
  description: "A special message waiting for you...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${greatVibes.variable} antialiased bg-burgundy text-cream option-transition`}
      >
        {children}
      </body>
    </html>
  );
}

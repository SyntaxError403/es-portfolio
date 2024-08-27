import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eli Serrano",
  description: "Eli Serrano's portfolio website",
  icons: {
    icon: [
      {
        url: "./favicon.ico",
        href: "./favicon.ico"
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

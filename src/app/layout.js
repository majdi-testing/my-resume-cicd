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

export const metadata = {
  title: "Majdi | Cloud/DevOps Engineer & Front-End",
  description:
    "Portfolio of Majdi — Front-End Developer and Junior Cloud/DevOps Engineer with AWS experience. Skilled in Next.js, React, Tailwind CSS, and cloud support.",
  keywords: [
    "Majdi",
    "Md Khaleeque Akhtar",
    "Front-End Developer",
    "Cloud Engineer",
    "Junior DevOps Engineer",
    "AWS",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Cloud Support Engineer",
    "Web Developer",
    "Web Developer Portfolio"
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

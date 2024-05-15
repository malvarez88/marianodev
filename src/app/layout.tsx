import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu/Menu";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarianoDev",
  description: "Frontend Developer - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={workSans.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}

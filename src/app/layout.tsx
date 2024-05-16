import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu/Menu";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
import { Providers } from "./providers";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarianoDev",
  description: "Frontend Developer - Portfolio",
  creator: "Mariano Alvarez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics />
      <body className={workSans.className}>
        <Providers>
          <Menu />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const varela = Varela_Round({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={varela.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

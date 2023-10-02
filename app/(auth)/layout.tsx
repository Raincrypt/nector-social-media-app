import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nector",
  description: "Social Media Platform that connects everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full flex justify-center items-center">
        <body className={`bg-dark-1 ${inter.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio built with Next.js + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* Navbar visible on all pages */}
        <Navbar />

        {/* Page-specific content */}
        <main className="container mx-auto px-4 py-6">{children}</main>

        {/* Footer visible on all pages */}
        <footer className="bg-gray-900 text-white text-center py-4 mt-10">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

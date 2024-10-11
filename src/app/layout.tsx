import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quickbet Movies",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus laudantium expedita eos dolore placeat, laboriosam blanditiis corporis quisquam quasi dolorem consequuntur id qui assumenda! Tempora, provident maiores. Aliquam, voluptatum!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

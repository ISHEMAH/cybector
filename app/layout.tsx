import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/poppins"; 



export const metadata: Metadata = {
  title: "Cybector",
  description: "AI & Blockchain Dev Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

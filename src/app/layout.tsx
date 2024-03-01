import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarkyNote",
  description: "MarkyNote - A markdown note taking app",
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

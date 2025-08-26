// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

// Čia gali aprašyti SEO metadata
export const metadata: Metadata = {
  title: "AIMILION",
  description: "GOING WITH LIONS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

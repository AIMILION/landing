import "./globals.css";

export const metadata = {
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

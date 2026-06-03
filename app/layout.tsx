import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "uniCLIQ - Your Campus Community Hub",
  description: "A student-first campus platform for events, study groups, announcements, profiles, messaging, and nearby discovery.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

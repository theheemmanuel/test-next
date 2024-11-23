import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Hee Growth",
  description: "Famous App CLone",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}

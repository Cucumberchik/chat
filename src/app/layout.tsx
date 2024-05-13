import type { Metadata } from "next";
import type { ReactNode } from "react";
import '~/styles/app.scss'

export const metadata: Metadata = {
  title: "Chat App",
  description: "Chat Application by Cucumberchik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body _dark_theme" >{children}</body>
    </html>
  );
}

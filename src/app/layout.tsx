import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cris Khang | Cửa Sắt, Nhôm Kính, Cửa Cổng, Hàng Rào",
  description:
    "Cris Khang — xưởng sắt, nhôm kính chuyên cửa sắt, cửa cổng, lan can, hàng rào. Thiết kế – gia công – lắp đặt trọn gói. Hotline 0337 429 181.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

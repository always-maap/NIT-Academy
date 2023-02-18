import Nav from "@/components/Nav";
import localFont from "@next/font/local";
import clsx from "clsx";
import type { Metadata } from "next";

import "./globals.css";

const yekanBakh = localFont({
  src: [
    {
      path: "../public/fonts/yekanBakh/YekanBakhFaNum-Regular.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/yekanBakh/YekanBakhFaNum-Bold.woff2",
      weight: "900",
    },
  ],
  variable: "--font-yekanBakh",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "آکادمی کامپیوتر نوشیروانی",
    template: "آکادمی | %s",
  },
  description:
    "آموزش های مجازی، جزوات و سوالات رشته کامپیوتر دانشگاه نوشیروانی بابل",
  icons: {
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "آکادمی کامپیوتر نوشیروانی",
    description:
      "آموزش های مجازی، جزوات و سوالات رشته کامپیوتر دانشگاه نوشیروانی بابل",
    url: "https://nitacademy.ir",
    siteName: "آکادمی کامپیوتر نوشیروانی",
    images: [
      {
        url: "https://nitacademy.ir/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "fa-IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={clsx("text-white bg-[#111010]", yekanBakh.variable)}
    >
      <head />
      <body className="">
        <Nav />
        {children}
      </body>
    </html>
  );
}

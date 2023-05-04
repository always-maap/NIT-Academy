import Nav from "@/components/Nav";
import localFont from "@next/font/local";
import clsx from "clsx";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

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

const TITLE = "آکادمی کامپیوتر نوشیروانی";
const DESCRIPTION =
  "آموزش های مجازی، جزوات و سوالات رشته کامپیوتر دانشگاه نوشیروانی بابل";
const OG = "https://nitacademy.ir/og.jpg";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "آکادمی | %s",
  },
  description: DESCRIPTION,
  icons: {
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: TITLE,
    description: "",
    url: "https://nitacademy.ir",
    siteName: TITLE,
    images: [OG],
    locale: "fa-IR",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    images: [OG],
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
      className={clsx("text-white bg-[#111010]", yekanBakh.variable)}
    >
      <head />
      <body className="">
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

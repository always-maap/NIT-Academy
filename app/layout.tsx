import Nav from "@/components/NavBar";
import localFont from "@next/font/local";
import clsx from "clsx";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        yekanBakh.variable
      )}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="">
        <Nav />
        {children}
      </body>
    </html>
  );
}

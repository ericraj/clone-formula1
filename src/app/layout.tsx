import "./globals.css";

import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import localFont from "next/font/local";
import { clsx } from "~/utils";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--titilliumweb"
});

const f1Font = localFont({
  src: [
    {
      path: "../assets/fonts/Formula1-Regular_web_0.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../assets/fonts/Formula1-Bold_web_0.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../assets/fonts/Formula1-Wide_web_0.ttf",
      weight: "900",
      style: "normal"
    }
  ],
  variable: "--f1"
});

export const metadata: Metadata = {
  title: "Formula1 clone"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://media.formula1.com/etc/designs/fom-website/favicon.ico"
      />
      <body className={clsx(titilliumWeb.variable, f1Font.variable, "font-titilliumweb")}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

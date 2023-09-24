import "./globals.css";

import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import { clsx } from "~/utils";

const titilliumWeb = Titillium_Web({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

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
      <body className={clsx(titilliumWeb.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;

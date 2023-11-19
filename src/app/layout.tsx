import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import { TheHeader } from "@/components/TheHeader";
import { TheFooter } from "@/components/TheFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.layout}>
          <TheHeader />
          
          <main className={styles.main}>{children}</main>
          
          <TheFooter />
          </div>
      </body>
    </html>
  );
}

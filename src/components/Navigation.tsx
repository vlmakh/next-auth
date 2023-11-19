"use client";

import styles from "@/app/page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navList}>
      <Link
        href="/"
        className={pathname === "/" ? styles.active : styles.navCard}
      >
        <h2>
          Home <span>-&gt;</span>
        </h2>
      </Link>

      <Link
        href="/products"
        className={pathname === "/products" ? styles.active : styles.navCard}
      >
        <h2>
          Products <span>-&gt;</span>
        </h2>
      </Link>

      <Link
        href="/about"
        className={pathname === "/about" ? styles.active : styles.navCard}
      >
        <h2>
          About <span>-&gt;</span>
        </h2>
      </Link>
    </nav>
  );
};

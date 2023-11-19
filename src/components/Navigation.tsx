"use client";

import styles from "@/app/page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = { navItems: NavLink[] };

export const Navigation = ({ navItems }: Props) => {
  const pathname = usePathname();

  return (
    <nav className={styles.navList}>
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={isActive ? styles.active : styles.navCard}
          >
            <h2>
              {item.label} <span>-&gt;</span>
            </h2>
          </Link>
        );
      })}
    </nav>
  );
};

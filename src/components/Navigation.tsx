"use client";

import styles from "@/app/page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

type NavLink = {
  label: string;
  href: string;
};

type Props = { navItems: NavLink[] };

export const Navigation = ({ navItems }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  // console.log(session);

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

      {session?.data ? (
        <Link href="/api/auth/signout" className={styles.navCard}>
          <h2>
            SignOut <span>-&gt;</span>
          </h2>
        </Link>
      ) : (
        <Link href="/api/auth/signin" className={styles.navCard}>
          <h2>
            SignIn <span>-&gt;</span>
          </h2>
        </Link>
      )}
    </nav>
  );
};

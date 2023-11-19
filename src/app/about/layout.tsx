import Link from "next/link";
import styles from "@/app/page.module.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>About</h1>

      <ul>
        <li className={styles.card}>
          <Link href="/about/contacts"><h3>Contacts</h3></Link>
        </li>
        <li className={styles.card}>
          <Link href="/about/team"><h3>Team</h3></Link>
        </li>
      </ul>

      {children}
    </div>
  );
}

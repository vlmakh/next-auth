import styles from "@/app/page.module.css";
import Link from "next/link";

export const TheHeader = () => {
  return (
    <div className={styles.grid}>
      <Link href="/" className={styles.card}>
        <h2>
          Home <span>-&gt;</span>
        </h2>
      </Link>

      <Link href="/learn" className={styles.card}>
        <h2>
          Learn <span>-&gt;</span>
        </h2>
      </Link>

      <Link href="/template" className={styles.card}>
        <h2>
          Templates <span>-&gt;</span>
        </h2>
      </Link>

      <Link href="/about" className={styles.card}>
        <h2>
          About <span>-&gt;</span>
        </h2>
      </Link>
    </div>
  );
};

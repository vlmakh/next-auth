import styles from "@/app/page.module.css";
import Image from "next/image";

export const TheFooter = () => {
  return (
    <div className={styles.description}>
      <p>
        Test material
      </p>
      <div>
        <a
          href="https://vlmakh.github.io/my-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vm_logo.svg"
            alt="VM"
            className={styles.vercelLogo}
            width={60}
            height={24}
            priority
          /> 2023
        </a>
      </div>
    </div>
  );
};

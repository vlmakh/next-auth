import styles from "@/app/page.module.css";

type Props = {
    params: {
        id: string
    }
}

export default function ProductPage({params: {id}}: Props) {
  return (
    <div className={styles.center}>
          <h1>Product Page</h1>
          <h1> {id}</h1>
    </div>
  );
};
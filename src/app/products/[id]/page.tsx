import styles from "@/app/page.module.css";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return { title: id };
}

export default function ProductPage({ params: { id } }: Props) {
  return (
    <div className={styles.center}>
      <h1>Product Page</h1>
      <h1> {id}</h1>
    </div>
  );
}

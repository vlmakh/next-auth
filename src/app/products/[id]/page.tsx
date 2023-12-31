import styles from "@/app/page.module.css";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const product = await getData(id);

  return { title: product.title };
}

async function getData(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  return res.json();
}

export default async function ProductPage({ params: { id } }: Props) {
  const product = await getData(id);

  return (
    <div className={styles.productItem}>
      <Image src={product.image} alt={product.title} width={400} height={500} />

      <h1>{product.title}</h1>

      <h2>{product.price} USD</h2>

      <p>{product.category} </p>
      <p>{product.description} </p>
    </div>
  );
}

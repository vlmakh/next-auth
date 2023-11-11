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
  return { title: id };
}

async function getData(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)

  return res.json()
}

export default async function ProductPage({ params: { id } }: Props) {
  const product = await getData(id)

  console.log(product)

  return (
    <div className={styles.center}>
      <h1>{product.title}</h1>
      <h2>{product.price} </h2>
      <Image src={product.image} alt={product.title } width={400} height={500} />
      <p>{product.description} </p>
    </div>
  );
}

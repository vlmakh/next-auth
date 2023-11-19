import styles from "@/app/page.module.css";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products | Next Auth",
};

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  return res.json();
}

export default async function Products() {
  const products = await getData();

  return (
    <>
      <ul className={styles.productList}>
        {products.map((product: any) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <div className={styles.productCard}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={160}
                  height={160}
                />
                <h4>{product.title}</h4>
                <p>{product.price.toFixed(2)} USD</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

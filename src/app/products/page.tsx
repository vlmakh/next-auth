import styles from "@/app/page.module.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Next Auth",
};

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')

  return res.json()
}

export default async function Products() {
  const products = await getData()

  // console.log(products)

  return (
    <>
      <h1>Products Page</h1>

      <ul>
        {products.map((product: any) => (<li key={product.id}><Link href={`/products/${product.id}`}>{ product.title}</Link></li>))}
      </ul>
    </>
  );
};

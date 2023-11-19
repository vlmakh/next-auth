import styles from "@/app/page.module.css";
import Link from "next/link";
import { Navigation } from "./Navigation";

export const TheHeader = () => {
  return (
    <header>
      <Navigation />      
    </header>
  );
};

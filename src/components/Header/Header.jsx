import React from "react";
import styles from "./Header.module.css";
import { productsData } from "@/data/products.js";

function Header() {
  return (
    <div className={styles.header}>
        <h1>🛒 Loja de Eletrônicos</h1>
        <p>Os melhores produtos com os melhores preços!</p>
        <p>
          📊 Total de produtos: <span id="totalProducts">{productsData.length}</span>
        </p>
      </div>
  );
}

export default Header;

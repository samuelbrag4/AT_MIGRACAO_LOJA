"use client";

import { useState, useEffect, use } from "react";
import styles from "./page.module.css";
import ProdutoCard from "@/components/ProductCard/ProductCard";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const fakeProducts = [
        

        // ...MAISSSSSSSSS...JA PONHO
      ];
      setProducts(fakeProducts);
      setTotalProducts(fakeProducts.length);
    }, 1000);
  }, []);

  return (
    <div>
      <div className={styles.products}>

        {/* Componente - PRODUTO */}
        {products.map((product, index) => (
          <ProdutoCard
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
            stars={product.stars}
            rating={product.rating}
            src={product.src}
            alt={product.alt}
          />
        ))}

      </div>
    </div>
  );
}

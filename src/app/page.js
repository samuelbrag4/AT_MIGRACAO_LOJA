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
        {
          title: "iPhone 15 Pro Max 256GB",
          price: "R$ 8.999,00",
          description: "O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.",
          stars: "⭐⭐⭐⭐⭐",
          rating: "(4.8) - 1.234 avaliações",
          src: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop",
          alt: "iPhone 15 Pro Max"
        },
        {
          title: "iPhone 15 Pro Max 256GB",
          price: "R$ 8.999,00",
          description: "O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.",
          stars: "⭐⭐⭐⭐⭐",
          rating: "(4.8) - 1.234 avaliações",
          src: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop",
          alt: "iPhone 15 Pro Max"
        },
        {
          title: "iPhone 15 Pro Max 256GB",
          price: "R$ 8.999,00",
          description: "O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.",
          stars: "⭐⭐⭐⭐⭐",
          rating: "(4.8) - 1.234 avaliações",
          src: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop",
          alt: "iPhone 15 Pro Max"
        },
        {
          title: "iPhone 15 Pro Max 256GB",
          price: "R$ 8.999,00",
          description: "O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.",
          stars: "⭐⭐⭐⭐⭐",
          rating: "(4.8) - 1.234 avaliações",
          src: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop",
          alt: "iPhone 15 Pro Max"
        },
        {
          title: "iPhone 15 Pro Max 256GB",
          price: "R$ 8.999,00",
          description: "O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.",
          stars: "⭐⭐⭐⭐⭐",
          rating: "(4.8) - 1.234 avaliações",
          src: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop",
          alt: "iPhone 15 Pro Max"
        },
        {
          title: "iPhone 15 Pro Max 256GB",
          price: "R$ 8.999,00",
          description: "O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.",
          stars: "⭐⭐⭐⭐⭐",
          rating: "(4.8) - 1.234 avaliações",
          src: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop",
          alt: "iPhone 15 Pro Max"
        },
        {
          title: "iPhone 15 Pro Max 256GB",
          price: "R$ 8.999,00",
          description: "O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.",
          stars: "⭐⭐⭐⭐⭐",
          rating: "(4.8) - 1.234 avaliações",
          src: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop",
          alt: "iPhone 15 Pro Max"
        },
        
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

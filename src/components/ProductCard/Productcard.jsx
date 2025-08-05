import React from "react";
import styles from "./ProductCard.module.css";

function ProdutoCard({
  title = "404",
  price = 0,
  description = "404",
  stars = "404",
  rating = "404",
}) {
  return (
    <div class="product-card" data-category="smartphones">
      <div class="product-image">
        <Image
          src="https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop"
          alt="iPhone 15 Pro Max"
          width={300}
          height={200}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      </div>
      <div class="product-title">iPhone 15 Pro Max 256GB</div>
      <div class="product-price">R$ 8.999,00</div>
      <div class="product-description">
        O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras
        profissional.
      </div>
      <div class="product-rating">
        <span class="stars">⭐⭐⭐⭐⭐</span>
        <span>(4.8) - 1.234 avaliações</span>
      </div>
    </div>
  );
}

export default ProdutoCard;

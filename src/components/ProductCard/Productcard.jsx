import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";

function ProdutoCard({
  src,
  alt,
  title = "404",
  price = 0,
  description = "404",
  stars = "404",
  rating = "404",
}) {
  return (
    <div className={styles.productCard} data-category="smartphones">
      <div className={styles.productImage}>
        <Image
          src={src}
          alt={alt}
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
      <div className={styles.productTitle}>{title}</div>
      <div className={styles.productPrice}>{price}</div>
      <div className={styles.productDescription}>{description}</div>
      <div className={styles.productRating}>
        <span className={styles.stars}>{stars}</span>
        <span className={styles.rating}>{rating}</span>
      </div>
    </div>
  );
}

export default ProdutoCard;

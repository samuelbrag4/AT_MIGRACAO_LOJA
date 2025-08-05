"use state"

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import ProdutoCard from "@/components/ProductCard/Productcard";

export default function Home() {
  return (
    <div>

      {/* Componente - HEADER */}
      <Header />

      <div class="products">

        {/* Componente - PRODUTO */}
        {/* <ProdutoCard /> */}

      </div>
    </div>
  );
}

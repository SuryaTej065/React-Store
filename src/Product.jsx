import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:8080/products";
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (err) {
      setError("Failed to fetch products: " + err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {error && <div style={{color: "red"}}>{error}</div>}
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </div>
  );
}
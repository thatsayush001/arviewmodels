import React from "react";
import { Link } from "react-router-dom";
import productItems from "../../data/ProductItems";
import ModelViewer from "../ModelViewer/ModelViewer";
import "../ProductList/ProductList.css";
import LazyLoad from "react-lazyload";

const ProductList = ({ addToWishlist, wishlist, removeFromWishlist }) => {
  return (
    <section className="list-view">
      {productItems.map((item, idx) => (
        <LazyLoad key={idx}>
          <Link to={`/product/${item.id}`} className="product-link">
            <ModelViewer
              item={item}
              addToWishlist={addToWishlist}
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist}
            />
          </Link>
        </LazyLoad>
      ))}
    </section>
  );
};

export default ProductList;

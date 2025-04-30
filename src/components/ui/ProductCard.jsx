import React from "react";
import { motion } from "framer-motion";
import Image from "./Image";
import ButtonWrapper from "./Buttons";
import { Link } from "react-router-dom";
import { removeHtmlTags } from "../../utility/removeTags";

export function ProductCard({ product, size = "medium", index }) {
  if (size != "large" && size != "medium") {
    return;
  }
  if (!product) {
    return;
  }

  return size === "medium" ? (
    <Link to={`/product/${index}`}>
      <motion.div
        className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden w-52 h-72 hover:drop-shadow-xl  "
        initial={false}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        // layoutId={`product-${product.id}`}
      >
        <motion.div
          // layoutId={`product-image-${product.id}`}
          className="relative w-48  m-2   "
        >
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover "
          />
        </motion.div>
        <div className=" flex flex-col flex-grow">
          <motion.h3
            // layoutId={`product-name-${product.id}`}
            className="text-sm font-semibold font-serif mb-2 "
          >
            {product.name}
          </motion.h3>
          <div className=" w-48  flex justify-between items-center">
            <motion.span
              // layoutId={`product-price-${product.id}`}
              className="text font-bold"
            >
              {product.priceInfo.linePrice}
            </motion.span>
            <ButtonWrapper label="Add to Cart" size="small" />
          </div>
        </div>
      </motion.div>
    </Link>
  ) : (
    <Link to={`/product/${index}`}>
      <motion.div
        className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden w-80 hover:drop-shadow-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        // layoutId={`product-${product.id}`}
      >
        <motion.div
          // layoutId={`product-image-${product.id}`}
          className="relative h-80 p-2"
        >
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="p-4 flex flex-col flex-grow">
          <motion.h3
            // layoutId={`product-name-${product.id}`}
            className="text-lg font-semibold mb-2"
          >
            {product.name}
          </motion.h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">
            {removeHtmlTags(product.shortDescription)}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className=" line-through">
                {product.priceInfo.wasPrice}
              </span>
              <motion.span
                // layoutId={`product-price-${product.id}`}
                className="text-xl font-bold"
              >
                {product.priceInfo.linePrice}
              </motion.span>
            </div>
            <ButtonWrapper
              url={`product-cartBtn-${product.id}`}
              label="Add to Cart"
              size="medium"
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
} 
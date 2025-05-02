import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./ProductCard";

export default function ProductSlider({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(2);
      } else if (window.innerWidth < 1280) {
        setProductsPerPage(3);
      } else {
        setProductsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setVisibleProducts(
      products?.slice(currentIndex, currentIndex + productsPerPage)
    );
  }, [currentIndex, products, productsPerPage]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - productsPerPage : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + productsPerPage >= products.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto px-4 py-8  ">
      <div className="overflow-hidden">
        <motion.div
          className="flex h-[45vh] items-center  "
          initial={false}
          animate={{ x: `calc(-${currentIndex * (100 / productsPerPage)}%)` }}
          transition={{ type: "spring", stiffness: 500, damping: 50 }}
        >
          {products?.map(
            (product, index) =>
              product.id && (
                <div
                  key={product.id}
                  className=" w-56 m-4  "
                  style={{ width: ` calc(100% / ${productsPerPage})` }}
                >
                  <ProductCard
                    index={index}
                    product={product}
                    size={"medium"}
                  />
                </div>
              )
          )}
        </motion.div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
        aria-label="Previous products"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
        aria-label="Next products"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}

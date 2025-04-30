import React from "react";

const Carousal = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => {
        return (
          <Link key={index} to={`/product/${index + start}`}>
            <div
              className={`flex flex-col min-w-[${width}] mr-7 ${
                width === "7vw" && "m-10"
              } `}
            >
              {/* <ProductCard key={index + 11} index={index} start={start} />  */}
              <ProductCard key={index + "productCard"} product={product} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Carousal;

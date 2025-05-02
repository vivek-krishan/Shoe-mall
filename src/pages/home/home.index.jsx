import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BannerSlider from "../../components/ui/BannerSlider";
import useProductsStore from "../../utility/Stores/AllProductsStore";
import ImageSlider from "../../components/ui/ProductSlider";
import ProductSlider from "../../components/ui/ProductSlider";
import { ProductCard } from "../../components/ui/ProductCard";
import ButtonWrapper from "../../components/ui/Buttons";

function Home() {
  const [counter, setCounter] = useState(0);
  // const [allProducts, setAllProducts] = useState([]);

  // Fetching from the Store.
  const allProducts = useProductsStore((state) => state.products);

  return (
    <div className="w-full">
      {/* Banner */}
      <div>
        <BannerSlider images={6} />
      </div>

      <div className="Featured mb-20 mt-5">
        <div className="Heading flex justify-center items-center z-0 mb-5 cursor-default">
          <div className="absolute">
            <h1 className=" text-center text-9xl font-bold text-[#dadadac7] ">
              PRODUCT
            </h1>
          </div>
          <div className="z-10 flex flex-col items-center">
            <h1 className="text-center text-5xl font-bold">Best Seller</h1>
            <h5 className="text-center font-thin text-xl">products</h5>
          </div>
        </div>

        <div className="ProductList  flex  justify-evenly items-center">
          <div className="relative">
            <ProductCard product={allProducts?.[12]} index={12} size="large" />
          </div>
          <div className="w-[70vw]">
            <ProductSlider products={allProducts?.slice(0, 14)} />
          </div>
        </div>
      </div>
      <div className="Best_Seller h-fit flex flex-col justify-center items-center">
        <div className="Heading flex justify-center items-center z-0 mb-10 cursor-default">
          <div className="absolute">
            <h1 className=" text-center text-9xl font-bold text-[#dadadac7] ">
              SNICKERS
            </h1>
          </div>
          <div className="z-10 flex flex-col items-center">
            <h1 className="text-center text-5xl font-bold">Featured</h1>
            <h5 className="text-center font-thin text-xl">products</h5>
          </div>
        </div>
        <div className="Some-Products w-[85vw] flex flex-wrap justify-center items-center gap-10 ">
          {new Array(11).fill(1).map((_, i) => (
            <div key={i}>
              {allProducts?.[i + 14]?.id && (
                <ProductCard
                  product={allProducts[i + 14]}
                  index={i + 14}
                  size="medium"
                  key={i + 14}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="ViewAll_btn flex justify-center m-20">
        <Link to={`/all-products`}>
          <ButtonWrapper
            label="View All products"
            variant="outline"
            className="hover:bg-b"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;

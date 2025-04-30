import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useProductsStore from "../../utility/Stores/AllProductsStore";
import { ProductCard } from "../../components/ui/ProductCard";
import { motion } from "framer-motion";
import ButtonWrapper from "../../components/ui/Buttons";
import { removeHtmlTags } from "../../utility/removeTags";

const Product = () => {
  const [like, setLike] = useState(false);
  const { index } = useParams();
  const products = useProductsStore((state) => state.products);
  const Info = products[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const HandelCartItems = async (e) => {
    e.preventDefault();
    alert("Item added to cart");
  };

  const productTransition = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  return (
    <div className="ProductPage">
      {Info && (
        <motion.div
          // layoutId={`product-${Info.id}`}
          className="ProductDetails relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={productTransition}
        >
          <motion.div
            // layoutId={`product-image-${Info.id}`}
            className="ProductImg h-[75vh] m-4 rounded-3xl bg-white flex justify-center items-center overflow-hidden"
            style={{ width: "100%", height: "100%" }}
          >
            <motion.img
              src={Info?.image}
              alt="PImg"
              className="h-[80vh]"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
          <div className="PDetails flex justify-between m-8 absolute w-[85vw] h-[74vh] top-0">
            <div className="PName max-w-lg mx-16 cursor-default">
              <motion.h1
                // layoutId={`product-name-${Info.id}`}
                className="text-2xl font-bold"
              >
                {Info?.name}
              </motion.h1>
            </div>
            <div className="PPrice&cart m-20 h-fit flex flex-col justify-center items-center absolute bottom-0 right-0">
              {Info?.priceInfo?.wasPrice != null && (
                <h1 className="text-xl font-thin line-through">
                  {Info?.priceInfo?.wasPrice}
                </h1>
              )}
              <motion.h1
                // layoutId={`product-price-${Info.id}`}
                className="text-2xl font-medium"
              >
                {Info?.priceInfo?.linePrice}
              </motion.h1>
              <div className="flex justify-center items-center">
                {like ? (
                  <button className="Like m-4" onClick={() => setLike(false)}>
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#f70435"
                    ></box-icon>
                  </button>
                ) : (
                  <button className="Like m-4" onClick={() => setLike(true)}>
                    <box-icon name="heart" color="#35383f"></box-icon>
                  </button>
                )}
                <ButtonWrapper
                  label="Add to cart"
                  url={`product-cartBtn-${Info.id}`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white relative bottom-12 m-4 h-fit rounded-3xl">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl font-extralight text-center"
              >
                {removeHtmlTags(Info?.description)}
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Recommended products */}
      <div className="Recommendation">
        <div>
          <h1 className="text-3xl font-thin text-center">
            Recommended Products
          </h1>
        </div>
        <div className="grid grid-cols-5 place-items-center gap-10 m-10 ">
          {new Array(5).fill(1).map(
            (_, i) =>
              products[i]?.id && (
                <div key={i} className="">
                  <ProductCard
                    product={products[i]}
                    index={i}
                    size="medium"
                    key={i}
                  />
                </div>
              )
          )}
        </div>
      </div>
      <div className="ViewAll_btn flex justify-center m-20">
        <Link to={`/all-products`}>
          <button className="border border-black p-3 rounded-3xl hover:bg-white transition duration-300 hover:scale-105 ">
            View All products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;

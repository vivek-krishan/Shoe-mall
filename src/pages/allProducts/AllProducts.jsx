import CheckBox from "./CheckBox";
import useProductsStore from "../../utility/Stores/AllProductsStore";
import { ProductCard } from "../../components/ui/ProductCard";
import { useState } from "react";
import ButtonWrapper from "../../components/ui/Buttons";

const AllProducts = () => {
  const [items, setItems] = useState(16);
  const allProducts = useProductsStore((state) => state.products);

  // Functions
  const showMore = () => {
    if (items >= allProducts.length) {
      alert("No more products to show");
      return;
    }
    setItems(items + 20);
  };

  const showLess = () => {
    if (items <= 20) {
      alert("No more products to hide");
      return;
    }
    setItems(items - 20);
  };

  return (
    <div className="flex justify-evenly h-fit mt-10">
      <section className="Navbar relative  w-1/4 mr-10 ">
        <div className="Sort bg-gray-200 w-full h-[15vh] rounded-xl flex justify-evenly items-center">
          <select className="w-2/3 h-10 rounded-xl cursor-pointer bg-transparent border">
            <option value={""}>Choose the Option</option>
            <option value={"Relevence"}>Relevence</option>
            <option value={"Price-lh"}>Price: Low-High</option>
            <option value={"Price-hl"}>Price: High-Low</option>
            <option value={"Popularity"}>Popularity</option>
            <option value={"Newest First"}>Newest First</option>
          </select>
          <button className="bg-gray-600 px-2 py-1 rounded-lg hover:scale-105 hover:shadow-2xl transition duration-200">
            sort
          </button>
        </div>
        <div className="Filter bg-gray-200 w-full h-[60vh] rounded-2xl z-50">
          <div className="Container w-fit h-full ml-10 my-5 p-10 overflow-y-scroll no-scrollbar ">
            <CheckBox />
          </div>
        </div>
        {/* <div className="bg-red-400 blur-xl opacity-50 absolute w-full h-full top-0 z-0"></div> */}
      </section>

      {/* All products section */}
      <section className="w-2/3 h-fit grid grid-cols-4 gap-5 ">
        {new Array(items).fill(1).map(
          (_, index) =>
            allProducts &&
            allProducts[index]?.id && (
              <div key={allProducts[index]?.id}>
                <ProductCard
                  product={allProducts[index]}
                  size="medium"
                  index={index}
                  key={allProducts[index].id + items}
                />
              </div>
            )
        )}
        <div className="flex justify-evenly items-center w-full h-20  border">
          <ButtonWrapper label="Show more" onClick={showMore} />
        </div>
      </section>
    </div>
  );
};

export default AllProducts;

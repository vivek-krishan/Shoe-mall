import { useParams } from "react-router-dom";
import { SearchProduct } from "./SearchProduct";
import { useEffect, useState } from "react";
import AllProducts from "../allProducts/AllProducts";
import useProductsStore from "../../utility/Stores/AllProductsStore";

const SearchPage = () => {
  const data = useProductsStore((state) => state.products);

  const [FilterItem, setFilterItem] = useState();

  const { input } = useParams();

  useEffect(() => {
    setFilterItem(SearchProduct(input, data));
  }, [input]);

  return (
    <div className="w-full h-fit">
      <AllProducts data={FilterItem} />
    </div>
  );
};

export default SearchPage;

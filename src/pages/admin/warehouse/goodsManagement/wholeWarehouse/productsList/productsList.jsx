import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import ProductTable from "~/components/table/productTable/productTable";
import Search from "~/components/search/search";
import { fetchApi } from "~/utils/common";
import * as productSlice from "~/store/common/slice/productSlice";

function ProductsList() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    const getAll = () =>
      fetchApi(productSlice.getAllProductsOfWholeWarehouses(), dispatch);

    getAll().then((result) => setProducts(result));
  }, []);

  return (
    <div>
      <Search placeholder="Tìm kiếm sản phẩm" />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ProductTable list={products} />
        </div>
      )}
    </div>
  );
}

export default ProductsList;

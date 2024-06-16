import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as productSlice from "~/store/common/slice/productSlice";

function ProductSelection({ isDisabled, setProduct, className }) {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = () =>
      fetchApi(productSlice.getAllProducts(), dispatch);

    getAllProducts().then((result) => {
      const products = result.map((item) => ({ ...item, label: item.name }));
      setProducts(products);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title="Tên hàng hóa"
      placeholder="Chọn hàng hóa"
      options={products}
      setState={setProduct}
      isDisabled={isDisabled}
    />
  );
}

export default ProductSelection;

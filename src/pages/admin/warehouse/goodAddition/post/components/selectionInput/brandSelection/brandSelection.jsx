import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi, formatOptionSelection } from "~/utils/common";
import * as brandSlice from "~/store/common/slice/brandSlice";

function BrandSelection({ isDisabled, setBrand }) {
  const [brands, setBrands] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllBrands = () => fetchApi(brandSlice.getAll(), dispatch);

    getAllBrands().then((result) => {
      const brands = formatOptionSelection(result);
      setBrands(brands);
    });
  }, []);

  return (
    <SelectSection
      title="Thương hiệu"
      placeholder="Chọn thương hiệu cho quà tặng"
      options={brands}
      setState={setBrand}
      isDisabled={isDisabled}
    />
  );
}

export default BrandSelection;

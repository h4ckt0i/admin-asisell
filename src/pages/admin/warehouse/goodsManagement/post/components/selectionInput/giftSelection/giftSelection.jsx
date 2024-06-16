import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as productSlice from "~/store/common/slice/productSlice";

function GiftSelection({ isDisabled, setGift }) {
  const [gifts, setGifts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllGifts = () => fetchApi(productSlice.getAllGifts(), dispatch);

    getAllGifts().then((result) => {
      const gifts = result.map((item) => ({ ...item, label: item.name }));
      setGifts(gifts);
    });
  }, []);

  return (
    <SelectSection
      title="Quà tặng"
      placeholder="Chọn quà tặng cho sản phẩm"
      options={gifts}
      isMulti={true}
      setState={setGift}
      isDisabled={isDisabled}
    />
  );
}

export default GiftSelection;

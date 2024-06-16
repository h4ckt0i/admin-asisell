import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi, formatOptionSelection } from "~/utils/common";
import * as productSlice from "~/store/common/slice/productSlice";

function GiftSelection({ setChosenGifts, isDisabled, className }) {
  const [gifts, setGifts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAll = () => fetchApi(productSlice.getAllGifts(), dispatch);

    getAll().then((result) => {
      const gifts = formatOptionSelection(result);
      setGifts(gifts);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title="Mua tặng kèm"
      placeholder="Chọn quà tặng"
      options={gifts}
      isMulti={true}
      setState={setChosenGifts}
      isDisabled={isDisabled}
    />
  );
}

export default GiftSelection;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as depreciationSlice from "~/store/common/slice/depreciationSlice";

function DepreciationSelection({ isDisabled, setDepreciation, className }) {
  const [depreciations, setDepreciations] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAll = () => fetchApi(depreciationSlice.getAll(), dispatch);

    getAll().then((result) => {
      const depreciations = result.map((item) => ({
        ...item,
        label: item.name,
      }));
      setDepreciations(depreciations);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title="Khấu hao"
      placeholder="Chọn tên khấu hao"
      options={depreciations}
      setState={setDepreciation}
      isDisabled={isDisabled}
    />
  );
}

export default DepreciationSelection;

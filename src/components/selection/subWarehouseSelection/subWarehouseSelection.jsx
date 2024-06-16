import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as subWarehouseSlice from "~/store/common/slice/subWarehouseSlice";

function SubWarehouseSelection({
  title,
  setSubWarehouse,
  isDisabled,
  className,
}) {
  const [subWarehouses, setSubWarehouses] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAll = () => fetchApi(subWarehouseSlice.getAll(), dispatch);

    getAll().then((result) => {
      const subWarehouses = result.map((item) => ({
        ...item,
        label: item.name,
      }));
      setSubWarehouses(subWarehouses);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title={title}
      placeholder="Chọn kho con"
      options={subWarehouses}
      setState={setSubWarehouse}
      isDisabled={isDisabled}
    />
  );
}

export default SubWarehouseSelection;

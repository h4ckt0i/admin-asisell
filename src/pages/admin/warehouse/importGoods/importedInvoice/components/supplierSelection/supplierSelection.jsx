import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as supplierSlice from "~/store/common/slice/supplierSlice";

function SupplierSelection({ isDisabled, setSupplier, className }) {
  const [suppliers, setSuppliers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllSuppliers = () => fetchApi(supplierSlice.getAll(), dispatch);

    getAllSuppliers().then((result) => {
      const suppliers = result.map((item) => ({ ...item, label: item.name }));
      setSuppliers(suppliers);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title="Tên nhà cung cấp"
      placeholder="Chọn nhà cung cấp"
      options={suppliers}
      setState={setSupplier}
      isDisabled={isDisabled}
    />
  );
}

export default SupplierSelection;

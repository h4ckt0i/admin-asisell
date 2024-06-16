import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as serviceSupplierSlice from "~/store/common/slice/serviceSupplierSlice";

function SupplierSelection({ isDisabled, setServiceSupplier, className }) {
  const [serviceSuppliers, setServiceSuppliers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAll = () => fetchApi(serviceSupplierSlice.getAll(), dispatch);

    getAll().then((result) => {
      const serviceSuppliers = result.map((item) => ({
        ...item,
        label: item.name,
      }));
      setServiceSuppliers(serviceSuppliers);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title="Nhà cung cấp"
      placeholder="Chọn nhà cung cấp dịch vụ"
      options={serviceSuppliers}
      setState={setServiceSupplier}
      isDisabled={isDisabled}
    />
  );
}

export default SupplierSelection;

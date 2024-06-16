import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";
import SupplierSelection from "../components/supplierSelection/supplierSelection";

import generalStyles from "~/styles/generalStyle.module.scss";

function SupplierSection({ isDisabled, setChosenSupplier, className }) {
  const [supplier, setSupplier] = useState({});

  useEffect(() => {
    setChosenSupplier(supplier);
  }, [supplier]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Nhà cung cấp</div>
      <SupplierSelection
        className={generalStyles.rightSideInputSectionTwo}
        setSupplier={setSupplier}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Mã nhà cung cấp"
        value={supplier.code || ""}
        defaultDisabled={true}
      />
    </div>
  );
}

export default SupplierSection;

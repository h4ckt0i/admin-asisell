import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";
import SupplierSelection from "../../selection/supplierSelection/supplierSelection";

import generalStyles from "~/styles/generalStyle.module.scss";

function SupplierSection({ isDisabled, setChosenSupplier, className }) {
  const [serviceSupplier, setServiceSupplier] = useState({});

  useEffect(() => {
    setChosenSupplier(serviceSupplier);
  }, [serviceSupplier]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>
        Nhà cung cấp dịch vụ
      </div>
      <SupplierSelection
        className={generalStyles.rightSideInputSectionTwo}
        setServiceSupplier={setServiceSupplier}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Mã nhà cung cấp"
        value={serviceSupplier.code || ""}
        defaultDisabled={true}
      />
    </div>
  );
}

export default SupplierSection;

import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";
import AddressChoice from "~/components/addressChoice/addressChoice";

import generalStyles from "~/styles/generalStyle.module.scss";

function SubWarehouseSection({ setNewSubWarehouse, isDisabled, className }) {
  const [name, setName] = useState("");
  const [representative, setRepresentative] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    setNewSubWarehouse({
      name,
      representative,
      address,
    });
  }, [name, representative, address]);

  return (
    <div className={className}>
      <span className={generalStyles.rightSideSubTitle}>Thông tin</span>
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Kho con"
        placeholder="Nhập tên kho con"
        value={name}
        setState={setName}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Người đại diện"
        placeholder="Nhập tên người đại diện"
        value={representative}
        setState={setRepresentative}
        isDisabled={isDisabled}
      />
      <AddressChoice
        className={generalStyles.addressSection}
        title="Địa chỉ"
        setAddress={setAddress}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default SubWarehouseSection;

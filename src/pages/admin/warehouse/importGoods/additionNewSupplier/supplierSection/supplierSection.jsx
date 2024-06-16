import { useState, useEffect } from "react";
import clsx from "clsx";
import InputSection from "~/components/section/inputSection/inputSection";
import AddressChoice from "~/components/addressChoice/addressChoice";

import generalStyles from "~/styles/generalStyle.module.scss";

function SupplierSection({ setSupplier, isDisabled, className }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [representativeName, setRepresentativeName] = useState("");
  const [representativePosition, setRepresentativePosition] = useState("");

  useEffect(() => {
    setSupplier({
      name,
      address,
      representative: {
        name: representativeName,
        position: representativePosition,
      },
    });
  }, [name, address, representativeName, representativePosition]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Nhà cung cấp</div>
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Tên nhà cung cấp"
        placeholder="Nhập tên nhà cung cấp"
        value={name}
        setState={setName}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Người đại diện"
        placeholder="Nhập tên người đại diện"
        value={representativeName}
        setState={setRepresentativeName}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Chức vụ"
        placeholder="Nhập chức vụ"
        value={representativePosition}
        setState={setRepresentativePosition}
        isDisabled={isDisabled}
      />
      <AddressChoice
        className={generalStyles.addressSection}
        title="Địa chỉ nhà cung cấp"
        setAddress={setAddress}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default SupplierSection;

import { useState, useEffect } from "react";
import clsx from "clsx";
import InputSection from "~/components/section/inputSection/inputSection";
import AddressChoice from "~/components/addressChoice/addressChoice";

import generalStyles from "~/styles/generalStyle.module.scss";

function PartnerSection({ setPartner, isDisabled, className }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [representativeName, setRepresentativeName] = useState("");
  const [representativePosition, setRepresentativePosition] = useState("");

  useEffect(() => {
    setPartner({
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
      <div className={generalStyles.rightSideSubTitle}>Đối tác</div>
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Tên đơn vị đối tác"
        placeholder="Nhập tên đơn vị đối tác"
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
        title="Địa chỉ đối tác"
        setAddress={setAddress}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default PartnerSection;

import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";
import PartnerSelection from "../components/partnerSelection/partnerSelection";

import generalStyles from "~/styles/generalStyle.module.scss";

function PartnerSection({ isDisabled, setChosenPartner, className }) {
  const [partner, setPartner] = useState({});

  useEffect(() => {
    setChosenPartner(partner);
  }, [partner]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Đối tác</div>
      <PartnerSelection
        className={generalStyles.rightSideInputSectionTwo}
        setPartner={setPartner}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Mã đối tác"
        value={partner.code || ""}
        defaultDisabled={true}
      />
    </div>
  );
}

export default PartnerSection;

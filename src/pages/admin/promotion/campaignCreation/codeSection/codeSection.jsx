import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";

import generalStyles from "~/styles/generalStyle.module.scss";

function CodeSection({ setPromotionalCode, isDisabled, className }) {
  const [code, setCode] = useState("");

  useEffect(() => {
    setPromotionalCode(code);
  }, [code]);

  return (
    <div className={className}>
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Mã ưu đãi"
        placeholder="Nhập mã ưu đãi"
        value={code}
        setState={setCode}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default CodeSection;

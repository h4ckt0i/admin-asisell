import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";
import TypeSelection from "./components/typeSelection/typeSelection";

import generalStyles from "~/styles/generalStyle.module.scss";

function QuantitySection({ isDisabled, setDepreciationQuantity, className }) {
  const [type, setType] = useState({});
  const [percentage, setPercentage] = useState();
  const [quantity, setQuantity] = useState();
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    +percentage !== 0
      ? setDepreciationQuantity({
          number: +percentage,
          type: "percentage",
        })
      : setDepreciationQuantity({
          number: +quantity,
          type: "quantity",
        });
  }, [percentage, quantity]);

  useEffect(() => {
    type.value && setIsHidden(false);
  }, [type.value]);

  return (
    <div className={className}>
      <div>
        <span className={generalStyles.rightSideSubTitle}>
          Số lượng khấu hao
        </span>
        &thinsp;
        <span>
          (Chỉ được chọn 1 trong 2 - Ví dụ: Điền 15%, sẽ không điền vào số lượng
          sản phẩm và ngược lại)
        </span>
      </div>
      <TypeSelection
        className={generalStyles.rightSideInputSectionTwo}
        setType={setType}
      />
      {isHidden ||
        (type.value === 1 ? (
          <InputSection
            className={generalStyles.rightSideInputSectionTwo}
            title="Theo phần trăm"
            type="number"
            placeholder="Nhập phần trăm khấu hao (không nhập kí hiệu %)"
            value={percentage}
            setState={setPercentage}
            isDisabled={isDisabled}
          />
        ) : (
          <InputSection
            className={generalStyles.rightSideInputSectionTwo}
            title="Theo số lượng"
            type="number"
            placeholder="Nhập số lượng sản phẩm khấu hao"
            value={quantity}
            setState={setQuantity}
            isDisabled={isDisabled}
          />
        ))}
    </div>
  );
}

export default QuantitySection;

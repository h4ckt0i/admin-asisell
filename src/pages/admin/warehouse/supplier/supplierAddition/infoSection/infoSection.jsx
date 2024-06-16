import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";
import SubCategorySelection from "../components/subCategorySelection copy/subCategorySelection";

import generalStyles from "~/styles/generalStyle.module.scss";

function InfoSection({ setInfo, isDisabled, className }) {
  const [subCategory, setSubCategory] = useState([]);
  const [quantity, setQuantity] = useState();
  const [whereProduction, setWhereProduction] = useState("");

  useEffect(() => {
    const newSubCates = subCategory.map((sub) => sub._id);

    setInfo({
      cooperation_info: {
        industry_cooperation: newSubCates,
        quantity: +quantity,
        where_production: whereProduction,
      },
    });
  }, [subCategory, quantity, whereProduction]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Thông tin</div>
      <SubCategorySelection
        className={generalStyles.rightSideInputSectionTwo}
        setSubCategory={setSubCategory}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Số lượng hàng"
        type="number"
        placeholder="Nhập số lượng hàng"
        value={quantity}
        setState={setQuantity}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Nơi sản xuất"
        placeholder="Nhập nơi sản xuất"
        value={whereProduction}
        setState={setWhereProduction}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default InfoSection;

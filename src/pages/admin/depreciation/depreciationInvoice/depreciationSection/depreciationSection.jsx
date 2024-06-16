import { useState, useEffect } from "react";
import clsx from "clsx";
import InputSection from "~/components/section/inputSection/inputSection";
import ProductSelection from "../components/productSelection/productSelection";
import { formatTypeNumber, convertCurrency } from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function DepreciationSection({ isDisabled, setChosenDepreciation, className }) {
  const [product, setProduct] = useState({});
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const quantity = product.quantity;
    const currentTotal = product.imported_price
      ? product.imported_price * quantity
      : 0;

    quantity && setQuantity(quantity.remaining_quantity);
    setTotal(formatTypeNumber(currentTotal));
    setChosenDepreciation({ name, product });
  }, [product, quantity]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Khấu hao</div>
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Tên khấu hao"
        placeholder="Nhập tên khấu hao"
        value={name}
        setState={setName}
        isDisabled={isDisabled}
      />
      <ProductSelection
        className={generalStyles.rightSideInputSectionTwo}
        setProduct={setProduct}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Mã SKU"
        value={product.SKU || ""}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Số lượng hàng tồn"
        value={quantity}
        defaultDisabled={true}
      />
      <InputSection
        className={clsx(
          generalStyles.rightSideInputSectionTwo,
          generalStyles.total
        )}
        title="Thành tiền"
        value={convertCurrency(total)}
        defaultDisabled={true}
      />
    </div>
  );
}

export default DepreciationSection;

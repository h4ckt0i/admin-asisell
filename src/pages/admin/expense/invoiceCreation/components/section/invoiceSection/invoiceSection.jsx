import { useState, useEffect } from "react";
import clsx from "clsx";
import InputSection from "~/components/section/inputSection/inputSection";
import TypeSelection from "../../selection/typeSelection/typeSelection";
import CategorySelection from "../../selection/categorySelection/categorySelection";
import { convertCurrency } from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function InvoiceSection({
  setProductInfo,
  setInvoiceSection,
  isDisabled,
  className,
}) {
  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");
  const [quantity, setQuantity] = useState();
  const [unitPrice, setUnitPrice] = useState();
  const [vat, setVat] = useState();
  const [vatPrice, setVatPrice] = useState(0);
  const [type, setType] = useState({});
  const [expenseCategory, setExpenseCategory] = useState({});

  useEffect(() => {
    const vatPrice = unitPrice * (vat / 100);

    setVatPrice(vatPrice);

    setProductInfo({
      quantity: +quantity,
      unitPrice: +unitPrice,
      vatPrice: +vatPrice,
    });

    setInvoiceSection({
      creator,
      name,
      type,
      quantity: +quantity,
      unit_price: +unitPrice,
      vat: {
        percentage: +vat,
        price: vatPrice,
      },
      expense_category: expenseCategory._id,
    });
  }, [creator, name, quantity, unitPrice, vat, type, expenseCategory]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Thông tin</div>
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Người tạo"
        placeholder="Nhập tên người tạo"
        value={creator}
        setState={setCreator}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Chi phí"
        placeholder="Nhập tên chi phí"
        value={name}
        setState={setName}
        isDisabled={isDisabled}
      />
      <TypeSelection
        className={generalStyles.rightSideInputSectionTwo}
        setChosenType={setType}
        isDisabled={isDisabled}
      />
      <CategorySelection
        className={generalStyles.rightSideInputSectionTwo}
        setExpenseCategory={setExpenseCategory}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Số lượng"
        type="number"
        placeholder="Nhập số lượng"
        value={quantity}
        setState={setQuantity}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Đơn giá"
        type="number"
        placeholder="Nhập đơn giá"
        value={unitPrice}
        setState={setUnitPrice}
        isDisabled={isDisabled}
      />
      <div>
        <InputSection
          className={generalStyles.rightSideInputSectionTwo}
          title="VAT (%)"
          type="number"
          placeholder="Nhập phần trăm VAT (không nhập kí hiệu %)"
          value={vat}
          setState={setVat}
          isDisabled={isDisabled}
        />
        <InputSection
          className={clsx(
            generalStyles.rightSideInputSectionTwo,
            generalStyles.total
          )}
          title="Giá VAT"
          value={convertCurrency(vatPrice)}
          setState={setVatPrice}
          defaultDisabled={true}
        />
      </div>
    </div>
  );
}

export default InvoiceSection;

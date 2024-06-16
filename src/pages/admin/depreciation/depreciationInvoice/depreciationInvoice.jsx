import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import DepreciationSection from "./depreciationSection/depreciationSection";
import QuantitySection from "./quantitySection/quantitySection";
import ExpenseSection from "./expenseSection/expenseSection";
import { convertToNumber, fetchApi, setDocumentTitle } from "~/utils/common";
import * as depreciationSlice from "~/store/common/slice/depreciationSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function DepreciationInvoice() {
  const [total, setTotal] = useState(0);
  const [depreciation, setDepreciation] = useState({});
  const [quantity, setQuantity] = useState({});
  const [expense, setExpense] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addNewDepreciation = () => {
    const data = {
      name: depreciation.name,
      product: depreciation.product._id,
      quantity,
      status: {
        label: "Đang xử lý",
        value: "pending",
      },
      ...expense,
    };

    const addDepreciation = () =>
      fetchApi(depreciationSlice.addDepreciation(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addDepreciation().then((result) => {
      result
        ? successfulToast("Thêm phiếu khấu hao thành công")
        : errorToast("Thêm phiếu khấu hao không thành công");

      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  useEffect(() => {
    setDocumentTitle("Khấu hao - Admin");
  }, []);

  useEffect(() => {
    let productQuantity = 0;
    let importedPrice = 0;
    const depreciatedProductQuantity = depreciation.product
      ? depreciation.product.quantity
      : 0;

    if (depreciatedProductQuantity) {
      productQuantity =
        depreciatedProductQuantity &&
        depreciatedProductQuantity.remaining_quantity;
      importedPrice = depreciation.product.imported_price;
    }
    if (quantity.type) {
      const quantityType = quantity.type;
      if (quantityType === "quantity") {
        setTotal(convertToNumber(quantity.number * importedPrice));
      } else {
        setTotal(
          convertToNumber(
            productQuantity * ((quantity.number / 100) * importedPrice)
          )
        );
      }
    }
  }, [depreciation, quantity]);

  return (
    <div className={generalStyles.rightSideContainer}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Thêm phiếu khấu hao - Khấu hao
      </span>
      <Toast />
      <div>
        <DepreciationSection
          className={generalStyles.additionSection}
          setChosenDepreciation={setDepreciation}
          isDisabled={isDisabled}
        />
        <QuantitySection
          className={generalStyles.additionSection}
          setDepreciationQuantity={setQuantity}
          isDisabled={isDisabled}
        />
        <ExpenseSection
          total={total}
          quantity={quantity}
          setExpense={setExpense}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm phiếu khấu hao"
            isLoading={isLoading}
            onClick={addNewDepreciation}
          />
        </div>
      </div>
    </div>
  );
}

export default DepreciationInvoice;

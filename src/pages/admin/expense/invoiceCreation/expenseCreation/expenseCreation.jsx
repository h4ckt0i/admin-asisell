import { useState } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import InvoiceSection from "../components/section/invoiceSection/invoiceSection";
import SupplierSection from "../components/section/supplierSection/supplierSection";
import PaymentSection from "../components/section/paymentSection/paymentSection";
import { fetchApi } from "~/utils/common";
import * as expenseSlice from "~/store/common/slice/expenseSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function ExpenseCreation() {
  const [invoiceSection, setInvoiceSection] = useState({});
  const [productInfo, setProductInfo] = useState({});
  const [supplier, setSupplier] = useState({});
  const [payment, setPayment] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addNewExpense = () => {
    const data = {
      ...invoiceSection,
      ...payment,
      service_supplier: supplier._id,
    };

    const addExpense = () => fetchApi(expenseSlice.addExpense(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addExpense().then((result) => {
      result
        ? successfulToast("Thêm hóa đơn thành công")
        : errorToast("Thêm hóa đơn không thành công");

      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  return (
    <div>
      <Toast />
      <div>
        <InvoiceSection
          className={generalStyles.additionSection}
          setProductInfo={setProductInfo}
          setInvoiceSection={setInvoiceSection}
          isDisabled={isDisabled}
        />
        <SupplierSection
          className={generalStyles.additionSection}
          setChosenSupplier={setSupplier}
        />
        <PaymentSection productInfo={productInfo} setPayment={setPayment} />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm hóa đơn"
            isLoading={isLoading}
            onClick={addNewExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default ExpenseCreation;

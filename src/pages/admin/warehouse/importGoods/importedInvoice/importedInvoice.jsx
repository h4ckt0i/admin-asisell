import { useState } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import ProductSection from "./productSection/productSection";
import PaymentSection from "../../components/paymentSection/paymentSection";
import { fetchApi } from "~/utils/common";
import * as invoiceSlice from "~/store/common/slice/invoiceSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function ImportedInvoice() {
  const [total, setTotal] = useState(0);
  const [productInfo, setProductInfo] = useState({});
  const [payment, setPayment] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addInvoice = () => {
    const data = {
      products: [productInfo.product],
      creator: productInfo.creator.name || "",
      ...payment,
    };

    const addImportedInvoice = () =>
      fetchApi(invoiceSlice.addImportedInvoice(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addImportedInvoice().then((result) => {
      result
        ? successfulToast("Thêm phiếu nhập hàng thành công")
        : errorToast("Thêm phiếu nhập hàng không thành công");

      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  return (
    <div>
      <Toast />
      <div>
        <ProductSection
          className={generalStyles.additionSection}
          setTotal={setTotal}
          setProductInfo={setProductInfo}
          isDisabled={isDisabled}
        />
        <PaymentSection
          total={total}
          setPayment={setPayment}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm phiếu nhập hàng"
            isLoading={isLoading}
            onClick={addInvoice}
          />
        </div>
      </div>
    </div>
  );
}

export default ImportedInvoice;

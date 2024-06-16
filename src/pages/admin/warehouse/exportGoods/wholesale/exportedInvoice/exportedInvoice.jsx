import { useState } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import ProductSection from "./productSection/productSection";
import PartnerSection from "./partnerSection/partnerSection";
import PaymentSection from "../../../components/paymentSection/paymentSection";
import { fetchApi } from "~/utils/common";
import * as invoiceSlice from "~/store/common/slice/invoiceSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function ExportedInvoice() {
  const [total, setTotal] = useState(0);
  const [productInfo, setProductInfo] = useState({});
  const [partner, setPartner] = useState({});
  const [payment, setPayment] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addInvoice = () => {
    const invoiceData = {
      products: [productInfo.product],
      creator: productInfo.creator.name || "",
      ...payment,
      partner: partner._id,
    };

    const addExportedInvoice = () =>
      fetchApi(invoiceSlice.addExportedInvoice(invoiceData), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addExportedInvoice().then((result) => {
      result
        ? successfulToast("Thêm đơn xuất hàng thành công")
        : errorToast("Thêm đơn xuất hàng không thành công");

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
        <PartnerSection
          className={generalStyles.additionSection}
          setChosenPartner={setPartner}
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
            textBtn="Thêm đơn xuất hàng"
            isLoading={isLoading}
            onClick={addInvoice}
          />
        </div>
      </div>
    </div>
  );
}

export default ExportedInvoice;

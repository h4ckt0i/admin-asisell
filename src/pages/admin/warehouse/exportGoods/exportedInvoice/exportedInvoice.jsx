import { useState } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import ProductSection from "./productSection/productSection";
import PartnerSection from "./partnerSection/partnerSection";
import PaymentSection from "../../importGoods/importedInvoice/paymentSection/paymentSection";
import { fetchApi } from "~/utils/common";
import * as invoiceSlice from "~/store/common/slice/invoiceSlice";
import * as productSlice from "~/store/common/slice/productSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function ExportedInvoice() {
  const [total, setTotal] = useState(0);
  const [exportedPriceProduct, setExportedPriceProduct] = useState(0);
  const [productInfo, setProductInfo] = useState({});
  const [partner, setPartner] = useState({});
  const [payment, setPayment] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addInvoice = () => {
    const invoiceData = {
      products: [productInfo.product],
      ...payment,
      partner: partner._id,
      sub_warehouse: productInfo.sub_warehouse._id,
    };

    const productData = {
      id: productInfo.product.product_id,
      body: {
        exported_price: +exportedPriceProduct,
      },
    };

    const getAll = () =>
      fetchApi(invoiceSlice.addExportedInvoice(invoiceData), dispatch);
    const editProduct = () =>
      fetchApi(productSlice.editProductById(productData), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    editProduct().then(() => {
      getAll().then((result) => {
        result
          ? successfulToast("Tạo phiếu xuất hàng thành công")
          : errorToast("Tạo phiếu xuất hàng không thành công");

        setIsLoading(false);
        setIsDisabled(false);
      });
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
          setExportedPriceProduct={setExportedPriceProduct}
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
            textBtn="Tạo phiếu xuất hàng"
            isLoading={isLoading}
            onClick={addInvoice}
          />
        </div>
      </div>
    </div>
  );
}

export default ExportedInvoice;

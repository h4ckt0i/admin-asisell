import { useState } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import ProductSection from "./productSection/productSection";
import { fetchApi } from "~/utils/common";
import * as invoiceSlice from "~/store/common/slice/invoiceSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function ExportedInvoice() {
  const [productInfo, setProductInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addInvoice = () => {
    const invoiceData = {
      products: [productInfo.product],
      creator: productInfo.creator.name || "",
      sub_warehouse: productInfo.sub_warehouse._id,
    };

    const addExportedSubWarehouseInvoice = () =>
      fetchApi(
        invoiceSlice.addExportedSubWarehouseInvoice(invoiceData),
        dispatch
      );

    setIsLoading(true);
    setIsDisabled(true);

    addExportedSubWarehouseInvoice().then((result) => {
      result
        ? successfulToast("Thêm phiếu xuất hàng thành công")
        : errorToast("Thêm phiếu xuất hàng không thành công");

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
          setProductInfo={setProductInfo}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm phiếu xuất hàng"
            isLoading={isLoading}
            onClick={addInvoice}
          />
        </div>
      </div>
    </div>
  );
}

export default ExportedInvoice;

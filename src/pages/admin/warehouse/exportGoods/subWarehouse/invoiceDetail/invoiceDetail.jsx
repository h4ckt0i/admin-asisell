import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Detail from "~/components/detail/detail";
import Loading from "~/components/loading/loading";
import IconButton from "~/components/iconButton/iconButton";
import ProductTable from "./components/productTable/productTable";
import UploadIcon from "~/assets/icons/uploadIcon";
import { type } from "./index";
import {
  convertTime,
  fetchApi,
  getIdFromPathName,
  setDocumentTitle,
} from "~/utils/common";
import * as invoiceSlice from "~/store/common/slice/invoiceSlice";

import styles from "./invoiceDetail.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function InvoiceDetail() {
  const [invoice, setInvoice] = useState({});
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.invoice.loading);

  const isImported = invoice.type === type[0].title;

  useEffect(() => {
    setDocumentTitle("Chi tiết phiếu hàng");

    const invoiceId = getIdFromPathName();

    const getInvoiceById = () =>
      fetchApi(invoiceSlice.getInvoiceById(invoiceId), dispatch);

    getInvoiceById().then((result) => {
      const invoice = result[0];

      setInvoice(invoice);
      setProducts(invoice.products);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Detail title="Chi tiết đơn xuất hàng hóa cho kho con">
          <IconButton className={styles.exportBtn} textBtn="Xuất excel">
            <UploadIcon className={styles.btnIcon} />
          </IconButton>
          <div className={generalStyles.detailSection}>
            <span className={generalStyles.detailTitle}>Mã phiếu hàng</span>
            <span className={styles.code}>{invoice.code}</span>
          </div>
          {invoice.time && (
            <>
              <div className={generalStyles.detailSection}>
                <span className={generalStyles.detailTitle}>
                  Thời gian xuất hàng
                </span>
                <span className={styles.code}>{convertTime(invoice.date)}</span>
              </div>
            </>
          )}
          <div className={clsx(generalStyles.detailSection, styles.products)}>
            <span className={generalStyles.detailTitle}>Sản phẩm</span>
            <ProductTable
              list={products}
              isImportedInvoice={isImported ? true : false}
            />
          </div>
        </Detail>
      )}
    </>
  );
}

export default InvoiceDetail;

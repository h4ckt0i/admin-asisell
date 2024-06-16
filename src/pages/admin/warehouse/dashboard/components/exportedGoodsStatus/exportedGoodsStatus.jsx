import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import BlockSection from "~/components/block/blockSection/blockSection";
import { iconsList, blockList } from "./index";
import { fetchApi } from "~/utils/common";
import * as invoiceSlice from "~/store/common/slice/invoiceSlice";
import * as partnerSlice from "~/store/common/slice/partnerSlice";

import styles from "./exportedGoodsStatus.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function ExportedGoodsStatus({ className }) {
  const [infoList, setInfoList] = useState([]);
  const [totalExportedInvoices, setTotalExportedInvoices] = useState(0);
  const [totalRetail, setTotalRetail] = useState(0);
  const [totalWholesale, setTotalWholesale] = useState(0);
  const [totalPartners, setTotalPartners] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTotalExport = () =>
      fetchApi(invoiceSlice.getTotalExportedInvoices(), dispatch);
    const getTotalRetail = () =>
      fetchApi(invoiceSlice.getTotalExportedInvoicesByRetail(), dispatch);
    const getTotalWholesale = () =>
      fetchApi(invoiceSlice.getTotalExportedInvoicesByWholesale(), dispatch);
    const getAllPartners = () =>
      fetchApi(partnerSlice.getTotalPartners(), dispatch);

    getTotalExport().then((result) =>
      setTotalExportedInvoices(result.total_price)
    );
    getTotalRetail().then((result) =>
      setTotalRetail(result.total_export_quantity)
    );
    getTotalWholesale().then((result) =>
      setTotalWholesale(result.total_export_quantity)
    );
    getAllPartners().then((result) => setTotalPartners(result.total_partners));
  }, []);

  useEffect(() => {
    const numbersList = [
      totalExportedInvoices,
      totalRetail,
      totalWholesale,
      totalPartners,
    ];

    const dataList = blockList.map((item, index) => ({
      ...item,
      number: numbersList[index],
    }));

    setInfoList(dataList);
  }, [totalExportedInvoices, totalRetail, totalWholesale, totalPartners]);

  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        styles.container,
        className
      )}
    >
      <div className={styles.header}>
        <div className={generalStyles.rightSideSubTitle}>
          Tình trạng xuất hàng
        </div>
      </div>
      <BlockSection
        className={styles.block}
        list={infoList}
        iconsList={iconsList}
      />
    </div>
  );
}

export default ExportedGoodsStatus;

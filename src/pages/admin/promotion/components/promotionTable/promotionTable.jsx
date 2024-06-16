import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "~/components/table/tableSection/tableSection";
import BluePenIcon from "~/assets/icons/bluePenIcon";
import { headerTable, status } from "./index";
import {
  formatNumber,
  convertCurrency,
  sortListByIndex,
  fetchApi,
  isNullField,
} from "~/utils/common";
import * as promotionSlice from "~/store/common/slice/promotionSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function PromotionTable({ className }) {
  const [promotions, setPromotions] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.promotion.loading);

  useEffect(() => {
    const getAll = () => fetchApi(promotionSlice.getAll(), dispatch);

    getAll().then((result) => sortListByIndex(result, setPromotions));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TableSection
          className={className}
          headerTable={headerTable}
          bodyTable={promotions.map((promotion, index) => {
            const applicableProduct = promotion.applicable_product[0];
            const productInfo = promotion.applicable_product[0].product;
            const statusPromotion = promotion.status;
            const time = promotion.time;

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{isNullField(promotion.name)}</td>
                <td>{isNullField(promotion.code)}</td>
                <td>{isNullField(time.start)}</td>
                <td>{isNullField(time.end)}</td>
                <td>{isNullField(formatNumber(applicableProduct.quantity))}</td>
                <td className={generalStyles.successful}>
                  {isNullField(
                    convertCurrency(applicableProduct.promotional_price)
                  )}
                </td>
                <td className={generalStyles.canceled}>
                  {isNullField(convertCurrency(productInfo.imported_price))}
                </td>
                <td
                  className={clsx(
                    status[0].value === statusPromotion.value &&
                      generalStyles.pending,
                    status[1].value === statusPromotion.value &&
                      generalStyles.shipping,
                    status[2].value === statusPromotion.value &&
                      generalStyles.canceled,
                    status[3].value === statusPromotion.value &&
                      generalStyles.successful
                  )}
                >
                  {statusPromotion.label}
                </td>
                <td className={generalStyles.action}>
                  <IconButton
                    className={generalStyles.actionBtn}
                    onClick={() => {}}
                  >
                    <BluePenIcon className={generalStyles.actionIcon} />
                  </IconButton>
                </td>
              </tr>
            );
          })}
          listTable={promotions}
          emptyTitle="Hiện chưa có khuyến mãi nào"
        />
      )}
    </>
  );
}

export default PromotionTable;

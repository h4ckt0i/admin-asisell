import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "~/components/table/tableSection/tableSection";
import BluePenIcon from "~/assets/icons/bluePenIcon";
import { headerTable } from "./index";
import {
  formatNumber,
  convertCurrency,
  convertTime,
  sortListByIndex,
  fetchApi,
  formatTypeNumber,
  isNullField,
} from "~/utils/common";
import { menu } from "~/components/leftSide";
import * as depreciationSlice from "~/store/common/slice/depreciationSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function DepreciationTable({ setTitle, setParent, className }) {
  const [depreciations, setDepreciations] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.depreciation.loading);

  useEffect(() => {
    const getAll = () => fetchApi(depreciationSlice.getAll(), dispatch);

    getAll().then((result) => sortListByIndex(result, setDepreciations));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TableSection
          className={className}
          headerTable={headerTable}
          bodyTable={depreciations.map((depreciation, index) => {
            const product = depreciation.product;
            const subCategory = product.sub_category;
            const importedPrice = product.imported_price;
            const quantity = product.quantity;
            const remainingQuantity = quantity
              ? quantity.remaining_quantity
              : 0;
            const expenseInfo = depreciation.expense_info;
            const status = depreciation.status;

            return (
              <tr key={index}>
                <td>
                  <IconButton
                    textBtn={depreciation.code}
                    to={`/depreciation-detail/${depreciation._id}`}
                  />
                </td>
                <td>{isNullField(convertTime(depreciation.date))}</td>
                <td>{isNullField(product.name)}</td>
                <td>{isNullField(product.SKU)}</td>
                <td>{isNullField(subCategory && subCategory.name)}</td>
                <td>{isNullField(convertCurrency(importedPrice))}</td>
                <td>
                  {isNullField(
                    formatNumber(formatTypeNumber(remainingQuantity))
                  )}
                </td>
                <td>
                  {isNullField(
                    convertCurrency(
                      formatTypeNumber(importedPrice * remainingQuantity)
                    )
                  )}
                </td>
                <td>{isNullField(convertCurrency(expenseInfo.total))}</td>
                <td className={generalStyles.successful}>
                  {isNullField(status.label)}
                </td>
                <td className={generalStyles.action}>
                  <IconButton
                    className={generalStyles.actionBtn}
                    onClick={() => {
                      setTitle(
                        menu[10].parent.children[2].id,
                        setParent(menu[10].parent.id)
                      );
                    }}
                  >
                    <BluePenIcon className={generalStyles.actionIcon} />
                  </IconButton>
                </td>
              </tr>
            );
          })}
          listTable={depreciations}
          emptyTitle="Hiện chưa có khấu hao nào"
        />
      )}
    </>
  );
}

export default DepreciationTable;

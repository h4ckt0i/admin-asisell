import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import TableSection from "~/components/table/tableSection/tableSection";
import { headerTable } from "./index";
import {
  convertTime,
  sortListByIndex,
  fetchApi,
  isNullField,
} from "~/utils/common";
import * as depreciationSlice from "~/store/common/slice/depreciationSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function HandlingTable({ className }) {
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
            const handling = depreciation.handling;
            const expenseInfo = depreciation.expense_info;

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{isNullField(convertTime(handling.date))}</td>
                <td>{isNullField(depreciation.code)}</td>
                <td>{isNullField(expenseInfo.responsible_person)}</td>
                <td>{isNullField(handling.handler)}</td>
                <td>{isNullField(handling.handling_method)}</td>
                <td
                  className={clsx(
                    depreciation.status.value === "pending"
                      ? generalStyles.pending
                      : generalStyles.successful
                  )}
                >
                  {depreciation.status.label}
                </td>
              </tr>
            );
          })}
          listTable={depreciations}
          emptyTitle="Hiện chưa có xử lý nào"
        />
      )}
    </>
  );
}

export default HandlingTable;

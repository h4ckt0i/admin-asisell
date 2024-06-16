import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "~/components/table/tableSection/tableSection";
import { headerTable } from "./index";
import {
  sortListByIndex,
  fetchApi,
  convertTime,
  isNullField,
} from "~/utils/common";
import * as subWarehouseSlice from "~/store/common/slice/subWarehouseSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function SubWarehouseTable({ className }) {
  const [subWarehouses, setSubWarehouses] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.subWarehouse.loading);

  useEffect(() => {
    const getAll = () => fetchApi(subWarehouseSlice.getAll(), dispatch);

    getAll().then((result) => sortListByIndex(result, setSubWarehouses));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TableSection
          className={className}
          headerTable={headerTable}
          bodyTable={subWarehouses.map((subWarehouse, index) => {
            const status = subWarehouse.status;

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <IconButton
                    textBtn={subWarehouse.code}
                    to={`/sub-warehouse-detail/${subWarehouse._id}`}
                  />
                </td>
                <td>
                  <IconButton
                    textBtn={subWarehouse.name}
                    to={`/sub-warehouse-detail/${subWarehouse._id}`}
                  />
                </td>
                <td>{isNullField(subWarehouse.representative)}</td>
                <td>{isNullField(convertTime(subWarehouse.opened_date))}</td>
                <td>{isNullField(subWarehouse.address)}</td>
                <td
                  className={clsx(
                    status.value === "active"
                      ? generalStyles.successful
                      : generalStyles.canceled
                  )}
                >
                  {status.label}
                </td>
              </tr>
            );
          })}
          listTable={subWarehouses}
          emptyTitle="Hiện chưa có nhân sự nào"
        />
      )}
    </>
  );
}

export default SubWarehouseTable;

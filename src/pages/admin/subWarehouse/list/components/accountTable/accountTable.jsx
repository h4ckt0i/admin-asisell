import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "~/components/table/tableSection/tableSection";
import RedTrashIcon from "~/assets/icons/redTrashIcon";
import { headerTable } from "./index";
import { sortListByIndex, isNullField, getLocalAdmin } from "~/utils/common";
import { fetchApi } from "~/utils/common";
import * as adminSlice from "~/store/common/slice/adminSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function AccountTable({ list, setNewAccounts, className }) {
  const [accounts, setAccounts] = useState([]);

  const dispatch = useDispatch();

  const deleteAccount = (id) => {
    const deleteObject = () => fetchApi(adminSlice.deleteAdmin(id), dispatch);

    deleteObject().then(() => {
      const newAccounts = list.filter((account) => account._id !== id);

      setNewAccounts(newAccounts);
    });
  };

  useEffect(() => {
    const localAdmin = getLocalAdmin();

    const accountsList = list.map((account) =>
      account.user_name === localAdmin.user_name
        ? {
            ...account,
            is_existed: true,
          }
        : account
    );

    sortListByIndex(accountsList, setAccounts);
  }, [list]);

  return (
    <TableSection
      className={className}
      headerTable={headerTable}
      bodyTable={accounts.map((account, index) => {
        const adminType = account.admin_type.level;
        const subWarehouse = account.level.warehouse_id;

        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{isNullField(account.name)}</td>
            <td>{isNullField(account.user_name)}</td>
            <td>{subWarehouse ? subWarehouse.name : "Kho tổng"}</td>
            <td
              className={clsx(
                adminType.value === "admin"
                  ? generalStyles.pending
                  : generalStyles.shipping
              )}
            >
              {adminType.label}
            </td>
            {!account.is_existed && (
              <td>
                <div className={generalStyles.action}>
                  <IconButton
                    className={generalStyles.actionBtn}
                    onClick={() => deleteAccount(account._id)}
                  >
                    <RedTrashIcon className={generalStyles.actionIcon} />
                  </IconButton>
                </div>
              </td>
            )}
          </tr>
        );
      })}
      listTable={accounts}
      emptyTitle="Hiện chưa có tài khoản nào"
    />
  );
}

export default AccountTable;

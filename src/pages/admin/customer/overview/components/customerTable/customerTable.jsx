import { useEffect, useState } from "react";
import Image from "~/components/image/image";
import TableSection from "~/components/table/tableSection/tableSection";
import { headerTable } from "./index";
import { sortListByIndex, isNullField } from "~/utils/common";

import styles from "./customerTable.module.scss";

function CustomerTable({ list, className }) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    sortListByIndex(list, setCustomers);
  }, [list]);

  return (
    <TableSection
      className={className}
      headerTable={headerTable}
      bodyTable={customers.map((user, index) => {
        const address = user.delivery_addresses.filter(
          (address) => address.is_default === true
        )[0];
        const currentAddress = `${address.street}, ${address.ward}, ${address.district}, ${address.city},`;

        return (
          <tr key={index}>
            <td>{user.customer_id}</td>
            <td className={styles.userNameContainer}>
              <Image className={styles.avatar} src={user.avatar} />
              <span className={styles.name}>{user.name}</span>
            </td>
            <td>{isNullField(user.birthday)}</td>
            <td>{isNullField(user.phone)}</td>
            <td>{isNullField(user.email)}</td>
            <td>{isNullField(currentAddress)}</td>
          </tr>
        );
      })}
      listTable={customers}
      emptyTitle="Hiện chưa có khách hàng nào"
    />
  );
}

export default CustomerTable;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TableSection from "~/components/table/tableSection/tableSection";
import IconButton from "~/components/iconButton/iconButton";
import { headerTable } from "./index";
import { sortListByIndex, fetchApi, isNullField } from "~/utils/common";
import * as supplierSlice from "~/store/common/slice/supplierSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function SupplierTable({ className }) {
  const [suppliers, setSuppliers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllSuppliers = () => fetchApi(supplierSlice.getAll(), dispatch);

    getAllSuppliers().then((result) => {
      sortListByIndex(result, setSuppliers);
    });
  }, []);

  return (
    <TableSection
      className={className}
      headerTable={headerTable}
      bodyTable={suppliers.map((supplier, index) => {
        const contact = supplier.contact;
        const industries = supplier.cooperation_info.industry_cooperation;
        const subCateNames = industries.map((item) => item.name);
        const subCategories = subCateNames.join(", ");

        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <IconButton
                className={generalStyles.productBtn}
                textBtn={supplier.name}
              />
            </td>
            <td>{isNullField(supplier.code)}</td>
            <td>{isNullField(subCategories)}</td>
            <td>{isNullField(supplier.address)}</td>
            <td className={generalStyles.successful}>
              {isNullField(contact.person_name)}
            </td>
            <td className={generalStyles.successful}>
              {isNullField(contact.phone)}
            </td>
          </tr>
        );
      })}
      listTable={suppliers}
      emptyTitle="Hiện chưa có nhà cung cấp nào"
    />
  );
}

export default SupplierTable;

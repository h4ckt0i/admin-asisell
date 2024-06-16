import { useState, useEffect } from "react";
import Table from "~/components/table/tableComponent/tableComponent";
import IconButton from "~/components/iconButton/iconButton";
import { supplierHeader, partnerHeader } from "./index";
import { isNullField } from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function SupplierTable({ isSupplier = true, list, className }) {
  const [header, setHeader] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    setSuppliers([list]);
    isSupplier ? setHeader(supplierHeader) : setHeader(partnerHeader);
  }, [list, isSupplier]);

  return (
    <Table
      className={className}
      header={header}
      body={suppliers.map((supplier, index) => {
        const contact = supplier.contact || {};
        const industries =
          supplier.cooperation_info &&
          supplier.cooperation_info.industry_cooperation;
        const subCateNames = industries && industries.map((item) => item.name);
        const subCategories = subCateNames && subCateNames.join(", ");

        return (
          <tr key={index}>
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
      list={suppliers}
    />
  );
}

export default SupplierTable;

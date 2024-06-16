import Table from "~/components/table/tableComponent/tableComponent";
import { headerTable } from "./index";
import {
  formatTypeNumber,
  convertTime,
  convertCurrency,
  isNullField,
} from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function DepreciationTable({ list, className }) {
  return (
    <Table
      className={className}
      header={headerTable}
      body={list.map((depreciation, index) => {
        const expenseInfo = depreciation.expense_info || {};
        const handling = depreciation.handling || {};
        const quantity = depreciation.quantity && depreciation.quantity.number;
        const type = depreciation.quantity && depreciation.quantity.type;
        const status = depreciation.status;

        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{isNullField(convertTime(depreciation.date))}</td>
            <td>{isNullField(depreciation.name)}</td>
            <td>{type === "percentage" ? `${quantity}%` : "-"}</td>
            <td>{type === "quantity" ? `${quantity} SP` : "-"}</td>
            <td>
              {isNullField(
                convertCurrency(formatTypeNumber(expenseInfo.total))
              )}
            </td>
            <td>{isNullField(expenseInfo.responsible_person)}</td>
            <td>{isNullField(handling.handler)}</td>
            <td>{isNullField(handling.handling_method)}</td>
            <td className={generalStyles.successful}>
              {isNullField(status && status.label)}
            </td>
          </tr>
        );
      })}
      list={list}
    />
  );
}

export default DepreciationTable;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TableSection from "~/components/table/tableSection/tableSection";
import IconButton from "~/components/iconButton/iconButton";
import { headerTable } from "./index";
import { sortListByIndex, fetchApi, isNullField } from "~/utils/common";
import * as partnerSlice from "~/store/common/slice/partnerSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function PartnerTable({ className }) {
  const [partners, setPartners] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAll = () => fetchApi(partnerSlice.getAll(), dispatch);

    getAll().then((result) => {
      sortListByIndex(result, setPartners);
    });
  }, []);

  return (
    <TableSection
      className={className}
      headerTable={headerTable}
      bodyTable={partners.map((partner, index) => {
        const contact = partner.contact;
        const paymentInfo = partner.payment_info;

        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <IconButton
                className={generalStyles.productBtn}
                textBtn={partner.name}
              />
            </td>
            <td>{isNullField(partner.code)}</td>
            <td className={generalStyles.successful}>
              {isNullField(contact.person_name)}
            </td>
            <td className={generalStyles.successful}>
              {isNullField(contact.phone)}
            </td>
            <td>{isNullField(partner.address)}</td>
            <td>{isNullField(paymentInfo.account_number)}</td>
            <td>{isNullField(paymentInfo.bank)}</td>
            <td>{isNullField(paymentInfo.owner)}</td>
          </tr>
        );
      })}
      listTable={partners}
      emptyTitle="Hiện chưa có đối tác nào"
    />
  );
}

export default PartnerTable;

import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Tippy from "@tippyjs/react/headless";
import Loading from "~/components/loading/loading";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "~/components/table/tableSection/tableSection";
import { headerTable, status } from "./index";
import { sortListByIndex, fetchApi, isNullField } from "~/utils/common";
import * as cooperativeSourceSlice from "~/store/common/slice/cooperativeSourceSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function MessageTable({ className }) {
  const [messages, setMessages] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cooperativeSource.loading);

  const renderMessage = (messageId) => (
    <div tabIndex="-1" className={generalStyles.section}>
      {status.map((type, index) => (
        <IconButton
          className={generalStyles.status}
          textBtn={type.label}
          onClick={() => handleStatus(messageId, status[index])}
          key={index}
        >
          <div
            className={clsx(
              type.value === status[0].value && generalStyles.backgroundPending,
              type.value === status[1].value &&
                generalStyles.backgroundSuccessful
            )}
          ></div>
        </IconButton>
      ))}
    </div>
  );

  const handleStatus = (messageId, status) => {
    const body = {
      status: status,
    };

    handleEditMessage(messageId, body);
  };

  const handleEditMessage = (messageId, dataBody) => {
    const data = {
      id: messageId,
      body: dataBody,
    };

    const editMessage = () =>
      fetchApi(cooperativeSourceSlice.editCooperativeSources(data), dispatch);

    editMessage().then((result) => {
      const newMessages = messages.map((message) => {
        message._id === result._id && (message = result);
        return message;
      });

      setMessages(newMessages);
    });
  };

  useEffect(() => {
    const getAll = () => fetchApi(cooperativeSourceSlice.getAll(), dispatch);

    getAll().then((result) => sortListByIndex(result, setMessages));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TableSection
          className={className}
          headerTable={headerTable}
          bodyTable={messages.map((message, index) => {
            const statusMessage = message.status;

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{isNullField(message.customer_name)}</td>
                <td>{isNullField(message.company_name)}</td>
                <td>{isNullField(message.tax_code)}</td>
                <td>{isNullField(message.product_source)}</td>
                <td>{isNullField(message.phone)}</td>
                <td>{isNullField(message.email)}</td>
                <td>
                  <div className={generalStyles.statusContainer}>
                    <div className={generalStyles.status}>
                      <div
                        className={clsx(
                          statusMessage.value === status[0].value &&
                            generalStyles.backgroundPending,
                          statusMessage.value === status[1].value &&
                            generalStyles.backgroundSuccessful
                        )}
                      ></div>
                      <span key={index}>{statusMessage.label}</span>
                    </div>
                    <div>
                      <Tippy
                        interactive
                        placement="bottom"
                        trigger="click"
                        render={() => renderMessage(message._id)}
                      >
                        <div>
                          <IconButton className={generalStyles.threeDotsBtn}>
                            <i className="fa-solid fa-ellipsis"></i>
                          </IconButton>
                        </div>
                      </Tippy>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
          listTable={messages}
          emptyTitle="Hiện chưa có tin nhắn nào"
        />
      )}
    </>
  );
}

export default MessageTable;

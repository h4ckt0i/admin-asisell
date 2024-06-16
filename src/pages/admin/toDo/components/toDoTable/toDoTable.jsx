import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import IconButton from "~/components/iconButton/iconButton";
import TableSection from "~/components/table/tableSection/tableSection";
import Edition from "~/components/edition/edition";
import RedTrashIcon from "~/assets/icons/redTrashIcon";
import { headerTable, status } from "./index";
import { sortListByIndex, fetchApi, isNullField } from "~/utils/common";
import { menu } from "~/components/leftSide";
import * as toDoSlice from "~/store/common/slice/toDoSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function ToDoTable({ setTitle, setParent, className }) {
  const [toDoes, setToDoes] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.toDo.loading);

  const deleteToDo = (id) => {
    const deleteObject = () => fetchApi(toDoSlice.deleteToDo(id), dispatch);

    deleteObject().then(() => {
      const newToDoes = toDoes.filter((toDo) => toDo._id !== id);

      setToDoes(newToDoes);
    });
  };

  useEffect(() => {
    const getAll = () => fetchApi(toDoSlice.getAll(), dispatch);

    getAll().then((result) => sortListByIndex(result, setToDoes));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TableSection
          className={className}
          headerTable={headerTable}
          bodyTable={toDoes.map((toDo, index) => {
            const time = toDo.time;
            const toDoStatus = toDo.status;
            const process = toDo.process;

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{isNullField(toDo.name)}</td>
                <td>{isNullField(time.start)}</td>
                <td>{isNullField(time.end)}</td>
                <td
                  className={clsx(
                    toDoStatus.value === status[0].value &&
                      generalStyles.pending,
                    toDoStatus.value === status[1].value &&
                      generalStyles.shipping,
                    toDoStatus.value === status[2].value &&
                      generalStyles.successful
                  )}
                >
                  {toDoStatus.label}
                </td>
                <td
                  className={clsx(
                    process <= 30 && generalStyles.pending,
                    process >= 31 && process <= 70 && generalStyles.shipping,
                    process >= 71 && generalStyles.successful
                  )}
                >
                  {`${process}%`}
                </td>
                <td>{toDo.note}</td>
                <td>
                  <Edition
                    parentId={menu[14].parent.id}
                    childId={menu[14].parent.children[2].id}
                    setTitle={setTitle}
                    setParent={setParent}
                  />
                </td>
                <td>
                  <div className={generalStyles.action}>
                    <IconButton
                      className={generalStyles.actionBtn}
                      onClick={() => deleteToDo(toDo._id)}
                    >
                      <RedTrashIcon className={generalStyles.actionIcon} />
                    </IconButton>
                  </div>
                </td>
              </tr>
            );
          })}
          listTable={toDoes}
          emptyTitle="Hiện chưa có việc cần làm nào"
        />
      )}
    </>
  );
}

export default ToDoTable;

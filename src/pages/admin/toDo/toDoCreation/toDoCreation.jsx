import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import ToDoSection from "./toDoSection/toDoSection";
import { fetchApi, getLocalAdmin, setDocumentTitle } from "~/utils/common";
import * as toDoSlice from "~/store/common/slice/toDoSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function ToDoCreation() {
  const [mainInfo, setMainInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addNewToDo = () => {
    const localAdmin = getLocalAdmin();

    const data = {
      ...mainInfo,
      admin: localAdmin._id,
    };

    const addTodo = () => fetchApi(toDoSlice.addTodo(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addTodo().then((result) => {
      result
        ? successfulToast("Thêm việc cần làm thành công")
        : errorToast("Thêm việc cần làm không thành công");

      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  useEffect(() => {
    setDocumentTitle("Việc cần làm - Admin");
  }, []);

  return (
    <div className={generalStyles.rightSideContainer}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Thêm mới - Việc cần làm
      </span>
      <Toast />
      <div>
        <ToDoSection setMainInfo={setMainInfo} isDisabled={isDisabled} />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm việc cần làm"
            isLoading={isLoading}
            onClick={addNewToDo}
          />
        </div>
      </div>
    </div>
  );
}

export default ToDoCreation;

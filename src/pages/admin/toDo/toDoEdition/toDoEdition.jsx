import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import InputSection from "~/components/section/inputSection/inputSection";
import ToDoSelection from "./components/toDoSelection/toDoSelection";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as toDoSlice from "~/store/common/slice/toDoSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function ToDoEdition() {
  const [toDo, setToDo] = useState({});
  const [process, setProcess] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const editProcess = () => {
    const data = {
      id: toDo._id,
      body: {
        process: +process,
      },
    };

    const editTodo = () => fetchApi(toDoSlice.editTodo(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    editTodo().then((result) => {
      result
        ? successfulToast("Thay đổi tiến độ công việc thành công")
        : errorToast("Thay đổi tiến độ công việc không thành công");

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
        Điều chỉnh tiến độ - Việc cần làm
      </span>
      <Toast />
      <div>
        <ToDoSelection
          className={generalStyles.rightSideInputSectionTwo}
          setToDo={setToDo}
          isDisabled={isDisabled}
        />
        <InputSection
          className={generalStyles.rightSideInputSectionTwo}
          title="Tiến độ công việc"
          placeholder="Nhập Tiến độ công việc"
          value={process}
          setState={setProcess}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thay đổi tiến độ công việc"
            isLoading={isLoading}
            onClick={editProcess}
          />
        </div>
      </div>
    </div>
  );
}

export default ToDoEdition;

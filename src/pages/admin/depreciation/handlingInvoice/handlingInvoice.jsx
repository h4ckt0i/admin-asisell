import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import InputSection from "~/components/section/inputSection/inputSection";
import HandlerSelection from "../components/handlerSelection/handlerSelection";
import DepreciationSelection from "./components/depreciationSelection/depreciationSelection";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as depreciationSlice from "~/store/common/slice/depreciationSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function HandlingInvoice() {
  const [depreciation, setDepreciation] = useState({});
  const [handler, setHandler] = useState({});
  const [handlingMethod, setHandlingMethod] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const editCurrentDepreciation = () => {
    const data = {
      id: depreciation._id,
      body: {
        handling: {
          handler: handler.name,
          handling_method: handlingMethod,
        },
        status: {
          label: "Đã xử lý",
          value: "completed",
        },
      },
    };

    const editDepreciation = () =>
      fetchApi(depreciationSlice.editDepreciation(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    editDepreciation().then((result) => {
      result
        ? successfulToast("Thêm phiếu xử lý thành công")
        : errorToast("Thêm phiếu xử lý không thành công");

      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  useEffect(() => {
    setDocumentTitle("Khấu hao - Admin");
  }, []);

  return (
    <div className={generalStyles.rightSideContainer}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Thêm phiếu xử lý - Khấu hao
      </span>
      <Toast />
      <div>
        <DepreciationSelection
          className={generalStyles.rightSideInputSectionTwo}
          setDepreciation={setDepreciation}
          isDisabled={isDisabled}
        />
        <InputSection
          className={generalStyles.rightSideInputSectionTwo}
          title="Mã khấu hao"
          value={depreciation.code || ""}
          defaultDisabled={true}
        />
        <HandlerSelection
          className={generalStyles.rightSideInputSectionTwo}
          title="Người xử lý"
          placeholder="Chọn người xử lý"
          setHandler={setHandler}
          isDisabled={isDisabled}
        />
        <InputSection
          className={generalStyles.rightSideInputSectionTwo}
          title="Hình thức xử lý"
          placeholder="Nhập hình thức xử lý"
          value={handlingMethod}
          setState={setHandlingMethod}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm phiếu xử lý"
            isLoading={isLoading}
            onClick={editCurrentDepreciation}
          />
        </div>
      </div>
    </div>
  );
}

export default HandlingInvoice;

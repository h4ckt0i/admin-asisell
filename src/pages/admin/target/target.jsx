import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import MonthSection from "./monthSection/monthSection";
import { getCurrentYear, fetchApi, setDocumentTitle } from "~/utils/common";
import * as targetSlice from "~/store/common/slice/targetSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function Target() {
  const [monthlyTarget, setMonthlyTarget] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  const createTarget = () => {
    const data = {
      year: getCurrentYear(),
      monthly_revenue: monthlyTarget,
    };

    const addTarget = () => fetchApi(targetSlice.addTarget(data), dispatch);
    setIsLoading(true);
    setIsDisabled(true);
    addTarget().then((result) => {
      result
        ? successfulToast("Thêm mục tiêu thành công")
        : errorToast("Thiếu mục tiêu tháng hoặc đã tồn tại mục tiêu năm");
      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  useEffect(() => {
    setDocumentTitle("Mục tiêu - Admin");
  }, []);

  useEffect(() => {
    if (monthlyTarget.length > 0 && monthlyTarget.length < 12) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [monthlyTarget]);

  return (
    <div className={generalStyles.rightSideContainer}>
      <span className={clsx(generalStyles.rightSideTitle)}>Mục tiêu</span>
      <Toast />
      <div>
        <MonthSection
          setMonthlyTarget={setMonthlyTarget}
          isDisabled={isDisabled}
        />
        {isError && (
          <span className={generalStyles.canceled}>
            Chưa đủ số mục tiêu cho từng tháng của năm hiện tại!
          </span>
        )}
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm mục tiêu"
            isLoading={isLoading}
            onClick={createTarget}
          />
        </div>
      </div>
    </div>
  );
}

export default Target;

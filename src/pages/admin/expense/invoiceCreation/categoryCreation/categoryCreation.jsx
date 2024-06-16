import { useState } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import InputSection from "~/components/section/inputSection/inputSection";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import { fetchApi } from "~/utils/common";
import * as expenseCategorySlice from "~/store/common/slice/expenseCategorySlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function CategoryCreation() {
  const [expenseCategory, setExpenseCategory] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const addExpenseCategory = () => {
    const data = { name: expenseCategory };

    const addExpenseCategory = () =>
      fetchApi(expenseCategorySlice.addExpenseCategory(data), dispatch);

    setIsDisabled(true);
    setIsLoading(true);

    addExpenseCategory().then((result) => {
      result
        ? successfulToast("Thêm phân loại dịch vụ thành công")
        : errorToast("Thêm phân loại dịch vụ không thành công");
      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  return (
    <div>
      <Toast />
      <div>
        <InputSection
          className={generalStyles.rightSideInputSectionTwo}
          title="Phân loại dịch vụ"
          placeholder="Nhập tên phân loại dịch vụ"
          value={expenseCategory}
          setState={setExpenseCategory}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm phân loại dịch vụ"
            isLoading={isLoading}
            onClick={addExpenseCategory}
          />
        </div>
      </div>
    </div>
  );
}

export default CategoryCreation;

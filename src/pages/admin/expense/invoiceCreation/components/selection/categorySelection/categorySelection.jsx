import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as expenseCategorySlice from "~/store/common/slice/expenseCategorySlice";

function CategorySelection({ isDisabled, setExpenseCategory, className }) {
  const [expenseCategories, setExpenseCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAll = () => fetchApi(expenseCategorySlice.getAll(), dispatch);

    getAll().then((result) => {
      const expenseCategories = result.map((item) => ({
        ...item,
        label: item.name,
      }));
      setExpenseCategories(expenseCategories);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title="Phân loại dịch vụ"
      placeholder="Chọn phân loại dịch vụ"
      options={expenseCategories}
      setState={setExpenseCategory}
      isDisabled={isDisabled}
    />
  );
}

export default CategorySelection;

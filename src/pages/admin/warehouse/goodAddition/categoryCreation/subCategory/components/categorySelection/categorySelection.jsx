import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as categorySlice from "~/store/common/slice/categorySlice";

function CategorySelection({ isDisabled, setCategory, className }) {
  const [Categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAll = () => fetchApi(categorySlice.getAll(), dispatch);

    getAll().then((result) => {
      const Categories = result.map((item) => ({
        ...item,
        label: item.name,
      }));
      setCategories(Categories);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title="Danh mục chính"
      placeholder="Chọn danh mục chính"
      options={Categories}
      setState={setCategory}
      isDisabled={isDisabled}
    />
  );
}

export default CategorySelection;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as subCategorySlice from "~/store/common/slice/subCategorySlice";

function SubCategorySelection({ isDisabled, setSubCategory }) {
  const [subCategories, setSubCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllSubcates = () => fetchApi(subCategorySlice.getAll(), dispatch);

    getAllSubcates().then((result) => {
      const subCates = result.map((item) => ({ ...item, label: item.name }));
      setSubCategories(subCates);
    });
  }, []);

  return (
    <SelectSection
      title="Danh mục"
      placeholder="Chọn danh mục con cho sản phẩm"
      options={subCategories}
      setState={setSubCategory}
      isDisabled={isDisabled}
    />
  );
}

export default SubCategorySelection;

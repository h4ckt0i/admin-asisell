import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi, formatOptionSelection } from "~/utils/common";
import * as subCategorySlice from "~/store/common/slice/subCategorySlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function SubCategorySelection({ isDisabled, setSubCategory }) {
  const [subCategories, setSubCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllSubCates = () => fetchApi(subCategorySlice.getAll(), dispatch);

    getAllSubCates().then((result) => {
      const subCates = formatOptionSelection(result);
      setSubCategories(subCates);
    });
  }, []);

  return (
    <SelectSection
      className={generalStyles.rightSideInputSectionTwo}
      title="Ngành hàng hợp tác"
      placeholder="Chọn ngành hàng"
      isMulti={true}
      options={subCategories}
      setState={setSubCategory}
      isDisabled={isDisabled}
    />
  );
}

export default SubCategorySelection;

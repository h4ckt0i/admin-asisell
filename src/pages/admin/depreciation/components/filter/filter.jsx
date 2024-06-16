import { useEffect } from "react";
import clsx from "clsx";
import SelectSection from "~/components/section/selectSection/selectSection";
import FilterIcon from "~/assets/icons/filterIcon";

import styles from "./filter.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Filter({ className }) {
  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        styles.container,
        className
      )}
    >
      <div className={styles.header}>
        <FilterIcon className={styles.headerIcon} />
        <span className={clsx(generalStyles.rightSideSubTitle, styles.title)}>
          Phân loại
        </span>
      </div>
      <div className={styles.content}>
        <SelectSection
          className={styles.selection}
          placeholder="Chọn sản phẩm"
          //   options={subCategories}
          //   setState={setSubCategory}
          //   isDisabled={isDisabled}
          defaultInputValue={"Sản phẩm"}
        />
        <SelectSection
          className={styles.selection}
          placeholder="Chọn thời gian nhập"
          //   options={subCategories}
          //   setState={setSubCategory}
          //   isDisabled={isDisabled}
          defaultInputValue={"Thời gian nhập"}
        />
        <SelectSection
          className={styles.selection}
          placeholder="Chọn khấu hao"
          //   options={subCategories}
          //   setState={setSubCategory}
          //   isDisabled={isDisabled}
          defaultInputValue={"Khấu hao"}
        />
      </div>
    </div>
  );
}

export default Filter;

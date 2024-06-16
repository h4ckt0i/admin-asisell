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
          placeholder="Chọn loại khách hàng"
          //   options={subCategories}
          //   setState={setSubCategory}
          //   isDisabled={isDisabled}
          defaultInputValue={"Tiềm năng"}
        />
        <SelectSection
          className={styles.selection}
          placeholder="Chọn khu vực"
          //   options={subCategories}
          //   setState={setSubCategory}
          //   isDisabled={isDisabled}
          defaultInputValue={"Hà Nội"}
        />
        <SelectSection
          className={styles.selection}
          placeholder="Chọn tình hình"
          //   options={subCategories}
          //   setState={setSubCategory}
          //   isDisabled={isDisabled}
          defaultInputValue={"Đã tư vấn"}
        />
      </div>
    </div>
  );
}

export default Filter;

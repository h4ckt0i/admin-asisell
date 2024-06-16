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
          placeholder="Chọn phòng ban"
          //   options={subCategories}
          //   setState={setSubCategory}
          //   isDisabled={isDisabled}
          defaultInputValue={"Phòng ban"}
        />
        <SelectSection
          className={styles.selection}
          placeholder="Chọn chức năng"
          //   options={subCategories}
          //   setState={setSubCategory}
          //   isDisabled={isDisabled}
          defaultInputValue={"Chức năng"}
        />
        <SelectSection
          className={styles.selection}
          placeholder="Giới tính"
          //   options={subCategories}
          //   setState={setSubCategory}
          //   isDisabled={isDisabled}
          defaultInputValue={"Giới tính"}
        />
      </div>
    </div>
  );
}

export default Filter;

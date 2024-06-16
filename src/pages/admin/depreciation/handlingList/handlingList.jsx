import { useEffect } from "react";
import clsx from "clsx";
import HandlingTable from "./components/handlingTable/handlingTable";
import { setDocumentTitle } from "~/utils/common";

import styles from "./handlingList.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function HandlingList() {
  useEffect(() => {
    setDocumentTitle("Khấu hao - Admin");
  }, []);

  return (
    <div className={clsx(generalStyles.rightSideContainer, styles.container)}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Danh sách xử lý - Khấu hao
      </span>
      <div className={styles.content}>
        <HandlingTable className={styles.table} />
      </div>
    </div>
  );
}

export default HandlingList;

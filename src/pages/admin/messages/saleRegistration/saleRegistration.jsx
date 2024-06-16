import Search from "~/components/search/search";
import Filter from "./components/filter/filter";
import MessageTable from "./components/messageTable/messageTable";

import styles from "./saleRegistration.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function SaleRegistration() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.searchAndFilter}>
          <Filter className={generalStyles.filter} />
          <Search className={styles.search} placeholder="Tìm kiếm tin nhắn" />
        </div>
        <MessageTable className={styles.table} />
      </div>
    </div>
  );
}

export default SaleRegistration;

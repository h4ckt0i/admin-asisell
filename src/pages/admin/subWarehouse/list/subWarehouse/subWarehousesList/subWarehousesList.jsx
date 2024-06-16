import SubWarehouseTable from "../../components/subWarehouseTable/subWarehouseTable";

import generalStyles from "~/styles/generalStyle.module.scss";

function SubWarehousesList() {
  return (
    <div>
      <div>
        <div className={generalStyles.mainContent}>
          <SubWarehouseTable />
        </div>
      </div>
    </div>
  );
}

export default SubWarehousesList;

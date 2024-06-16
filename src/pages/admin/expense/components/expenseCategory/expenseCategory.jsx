import clsx from "clsx";
import ProgressChart from "~/components/chart/progressChart/progressChart";

import generalStyles from "~/styles/generalStyle.module.scss";

function ExpenseCategory({ mostExpensiveCost, className }) {
  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        generalStyles.progressContainer,
        className
      )}
    >
      <span className={generalStyles.rightSideSubTitle}>Danh mục chi phí</span>
      {mostExpensiveCost.map((item, index) => (
        <div className={generalStyles.progressBarContainer} key={index}>
          <div className={generalStyles.progressBar}>
            <div className={generalStyles.progressTitleContainer}>
              <span className={generalStyles.progressTitle}>{item.name}</span>
              <span className={generalStyles.percent}>{item.percentage}%</span>
            </div>
            <ProgressChart percent={item.percentage} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpenseCategory;

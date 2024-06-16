import { Line } from "rc-progress";
import variableStyles from "~/styles/_variables.scss";

function ProgressChart({
  percent,
  strokeWidth = 2,
  strokeColor = variableStyles.chartColor,
  trailWidth = 2,
  trailColor = variableStyles.lineChartColor,
}) {
  return (
    <Line
      percent={percent}
      strokeWidth={strokeWidth}
      strokeColor={strokeColor}
      trailWidth={trailWidth}
      trailColor={trailColor}
    />
  );
}

export default ProgressChart;

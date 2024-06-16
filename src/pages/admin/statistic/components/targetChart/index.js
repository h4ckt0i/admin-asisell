import DollarIcon from "~/assets/icons/dollarIcon";
import variableStyles from "~/styles/_variables.scss";

export const revenueStats = [
  {
    id: 1,
    label: "Thực tế",
    number: 0,
    icon: DollarIcon,
    backgroundColor: {
      chart: variableStyles.chartColor,
      label: "#E2FFF3",
    },
  },
  {
    id: 2,
    label: "Mục tiêu",
    number: 0,
    icon: DollarIcon,
    backgroundColor: {
      chart: "#FFA800",
      label: "#FFF4DE",
    },
  },
];

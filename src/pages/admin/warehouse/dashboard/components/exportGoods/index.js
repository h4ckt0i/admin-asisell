import DollarIcon from "~/assets/icons/dollarIcon";
import variableStyles from "~/styles/_variables.scss";

export const invoiceStats = [
  {
    id: 1,
    label: "Bán lẻ",
    number: 0,
    icon: DollarIcon,
    backgroundColor: {
      chart: variableStyles.chartColor,
      label: "#E2FFF3",
    },
  },
  {
    id: 2,
    label: "Bán sỉ",
    number: 0,
    icon: DollarIcon,
    backgroundColor: {
      chart: "#FFA800",
      label: "#FFF4DE",
    },
  },
];

import LineChart from "~/assets/icons/line-chart.png";
import OrangeFire from "~/assets/icons/orange-fire.png";
import BlueStars from "~/assets/icons/blue-stars.png";

const iconsList = [
  {
    id: 1,
    icon: LineChart,
    backgroundColor: "#ffe2e5",
  },
  {
    id: 2,
    icon: OrangeFire,
    backgroundColor: "#fff4de",
  },
  {
    id: 3,
    icon: BlueStars,
    backgroundColor: "#c7ebff",
  },
];

const blockList = [
  {
    id: 1,
    title: "Tổng doanh thu (Đ)",
    number: 0,
  },
  {
    id: 2,
    title: "Tổng lợi nhuận (Đ)",
    number: 0,
  },
  {
    id: 3,
    title: "Số lượng sản phẩm",
    number: 0,
  },
];

export { iconsList, blockList };

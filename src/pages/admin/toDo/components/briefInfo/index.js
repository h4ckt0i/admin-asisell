import LineChart from "~/assets/icons/line-chart.png";
import OrangeFire from "~/assets/icons/orange-fire.png";
import GreenBook from "~/assets/icons/green-book.png";
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
    icon: GreenBook,
    backgroundColor: "#dcfce7",
  },
  {
    id: 4,
    icon: BlueStars,
    backgroundColor: "#c7ebff",
  },
];

const blockList = [
  {
    id: 1,
    title: "Tổng việc cần làm",
    number: 0,
  },
  {
    id: 2,
    title: "Đã hoàn thành",
    number: 0,
  },
  {
    id: 3,
    title: "Chưa thực hiện",
    number: 0,
  },
  {
    id: 4,
    title: "Đang thực hiện",
    number: 0,
  },
];

export { iconsList, blockList };

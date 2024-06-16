import Tag from "~/assets/icons/tag.png";
import LineChart from "~/assets/icons/line-chart.png";
import Note from "~/assets/icons/note.png";
import Diamond from "~/assets/icons/diamond.png";

const iconsList = [
  {
    id: 1,
    icon: LineChart,
    backgroundColor: "#ffe2e5",
  },
  {
    id: 2,
    icon: Note,
    backgroundColor: "#fff4de",
  },
  {
    id: 3,
    icon: Tag,
    backgroundColor: "#dcfce7",
  },
  {
    id: 4,
    icon: Diamond,
    backgroundColor: "#f3e8ff",
  },
];

const blockList = [
  {
    id: 1,
    title: "Tổng sản phẩm",
    number: 0,
  },
  {
    id: 2,
    title: "Sản phẩm mới (tháng)",
    number: 0,
  },
  {
    id: 3,
    title: "Tổng quà tặng",
    number: 0,
  },
  {
    id: 4,
    title: "Quà tặng mới (tháng)",
    number: 0,
  },
];

export { iconsList, blockList };

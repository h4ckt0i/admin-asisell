import Tag from "~/assets/icons/tag.png";
import LineChart from "~/assets/icons/line-chart.png";
import Note from "~/assets/icons/note.png";
import Diamond from "~/assets/icons/diamond.png";
import XMark from "~/assets/icons/x-mark.png";

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
  {
    id: 5,
    icon: XMark,
    backgroundColor: "#FFE8D7",
  },
];

const blockList = [
  {
    id: 1,
    title: "Tổng đơn hàng",
    number: 0,
  },
  {
    id: 2,
    title: "Đang chờ",
    number: 0,
  },
  {
    id: 3,
    title: "Đang vận chuyển",
    number: 0,
  },
  {
    id: 4,
    title: "Đã hoàn thành",
    number: 0,
  },
  {
    id: 5,
    title: "Đã hủy",
    number: 0,
  },
];

export { iconsList, blockList };

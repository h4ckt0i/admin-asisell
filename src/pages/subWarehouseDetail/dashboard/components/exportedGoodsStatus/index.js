import AddUser from "~/assets/icons/add-user.png";
import Tag from "~/assets/icons/tag.png";
import LineChart from "~/assets/icons/line-chart.png";
import Note from "~/assets/icons/note.png";

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
    icon: AddUser,
    backgroundColor: "#f3e8ff",
  },
];

const blockList = [
  {
    id: 1,
    title: "Tổng xuất (Đ)",
    number: 10000,
  },
  {
    id: 2,
    title: "Bán sỉ",
    number: 300,
  },
  {
    id: 3,
    title: "Bán lẻ",
    number: 10,
  },
  {
    id: 4,
    title: "Đối tác bán hàng",
    number: 10,
  },
];

export { iconsList, blockList };

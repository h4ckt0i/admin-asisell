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
    title: "Tổng khách hàng",
    number: 0,
  },
  {
    id: 2,
    title: "Khách hàng mới",
    number: 0,
  },
  {
    id: 3,
    title: "Sinh nhật",
    number: 0,
  },
  {
    id: 4,
    title: "Gần sinh nhật",
    number: 0,
  },
];

export { iconsList, blockList };

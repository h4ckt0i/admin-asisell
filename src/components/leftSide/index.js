import BlockIcon from "~/assets/icons/blockIcon";
import BagIcon from "~/assets/icons/bagIcon";
import UsersIcon from "~/assets/icons/usersIcon";
import DollarIcon from "~/assets/icons/dollarIcon";
import MessageIcon from "~/assets/icons/messageIcon";
import CubeIcon from "~/assets/icons/cubeIcon";
import MapIcon from "~/assets/icons/mapIcon";
import LineChartIcon from "~/assets/icons/lineChartIcon";
import BookMarkIcon from "~/assets/icons/bookMarkIcon";
import FourBlocksIcon from "~/assets/icons/fourBlocksIcon";
import ImportIcon from "~/assets/icons/importIcon";
import ExportIcon from "~/assets/icons/exportIcon";
import TelevisionIcon from "~/assets/icons/televisionIcon";
import SquareTickIcon from "~/assets/icons/squareTickIcon";
import PlusIcon from "~/assets/icons/plusIcon";
import TickUserIcon from "~/assets/icons/tickUserIcon";
import ThreeBlocksIcon from "~/assets/icons/threeBlocksIcon";
import CategoryIcon from "~/assets/icons/categoryIcon";
import CoinIcon from "~/assets/icons/coinIcon";
import PlusUserIcon from "~/assets/icons/plusUserIcon";
import ElectricIcon from "~/assets/icons/electricIcon";
import SpeakerIcon from "~/assets/icons/speakerIcon";
import GiftIcon from "~/assets/icons/giftIcon";
import UserIcon from "~/assets/icons/userIcon";

export const menu = [
  {
    id: 1,
    title: "Dashboard",
    icon: BlockIcon,
  },
  {
    id: 2,
    title: "Phân tích",
    icon: LineChartIcon,
  },
  {
    id: 3,
    title: "Thanh toán",
    icon: DollarIcon,
  },
  {
    id: 4,
    title: "Theo dõi đơn hàng",
    icon: BagIcon,
  },
  {
    id: 5,
    title: "Tin nhắn",
    icon: MessageIcon,
  },
  {
    parent: {
      id: 105,
      title: "Khách hàng",
      children: [
        {
          id: 6,
          title: "Tổng quan",
          icon: BookMarkIcon,
        },
        {
          id: 7,
          title: "Đối tác",
          icon: UserIcon,
        },
      ],
      icon: UsersIcon,
    },
  },
  {
    parent: {
      id: 106,
      title: "Kho",
      children: [
        {
          id: 8,
          title: "Dashboard",
          icon: BlockIcon,
        },
        {
          id: 9,
          title: "Nhà cung cấp",
          icon: UserIcon,
        },
        {
          id: 10,
          title: "Thêm sản phẩm",
          icon: PlusIcon,
        },
        {
          id: 11,
          title: "Danh sách sản phẩm",
          icon: GiftIcon,
        },
        {
          id: 12,
          title: "Nhập hàng",
          icon: ImportIcon,
        },
        {
          id: 13,
          title: "Xuất hàng",
          icon: ExportIcon,
        },
        {
          id: 14,
          title: "Hàng tồn",
          icon: TelevisionIcon,
        },
      ],
      icon: CubeIcon,
    },
  },
  {
    parent: {
      id: 107,
      title: "Vận chuyển",
      children: [
        {
          id: 15,
          title: "Giao hàng",
          icon: BookMarkIcon,
        },
      ],
      icon: MapIcon,
    },
  },
  {
    parent: {
      id: 108,
      title: "Khoản chi",
      children: [
        {
          id: 16,
          title: "Dashboard",
          icon: BlockIcon,
        },
        {
          id: 17,
          title: "Chi phí cố định",
          icon: SquareTickIcon,
        },
        {
          id: 18,
          title: "Chi phí lưu động",
          icon: SquareTickIcon,
        },
        {
          id: 19,
          title: "Thêm hóa đơn",
          icon: PlusIcon,
        },
      ],
      icon: SquareTickIcon,
    },
  },
  {
    parent: {
      id: 109,
      title: "Nhân sự",
      children: [
        {
          id: 20,
          title: "Danh sách",
          icon: CategoryIcon,
        },
        {
          id: 21,
          title: "Thêm nhân viên",
          icon: PlusUserIcon,
        },
        {
          id: 22,
          title: "Thêm lương/thưởng",
          icon: PlusIcon,
        },
        {
          id: 23,
          title: "Chi tiết lương/thưởng",
          icon: CoinIcon,
        },
        {
          id: 24,
          title: "Thêm ngày kết thúc",
          icon: PlusIcon,
        },
      ],
      icon: TickUserIcon,
    },
  },
  {
    parent: {
      id: 110,
      title: "Khấu hao",
      children: [
        {
          id: 25,
          title: "Danh mục khấu hao",
          icon: BlockIcon,
        },
        {
          id: 26,
          title: "Thêm phiếu khấu hao",
          icon: PlusIcon,
        },
        {
          id: 27,
          title: "Xử lý khấu hao",
          icon: CoinIcon,
        },
        {
          id: 28,
          title: "Danh sách xử lý",
          icon: CategoryIcon,
        },
      ],
      icon: ElectricIcon,
    },
  },
  {
    parent: {
      id: 111,
      title: "Khuyến mãi",
      children: [
        {
          id: 29,
          title: "Danh sách",
          icon: CategoryIcon,
        },
        {
          id: 30,
          title: "Danh sách chiến dịch",
          icon: ThreeBlocksIcon,
        },
        {
          id: 31,
          title: "Thêm mới",
          icon: PlusIcon,
        },
      ],
      icon: SpeakerIcon,
    },
  },
  {
    parent: {
      id: 112,
      title: "Kho tổng/con",
      children: [
        {
          id: 32,
          title: "Danh sách",
          icon: CategoryIcon,
        },
        {
          id: 33,
          title: "Thêm kho con",
          icon: PlusIcon,
        },
        {
          id: 34,
          title: "Thêm tài khoản",
          icon: PlusUserIcon,
        },
      ],
      icon: ThreeBlocksIcon,
    },
  },
  {
    id: 35,
    title: "Mục tiêu",
    icon: ElectricIcon,
  },
  {
    parent: {
      id: 114,
      title: "Việc cần làm",
      children: [
        {
          id: 36,
          title: "Danh sách",
          icon: CategoryIcon,
        },
        {
          id: 37,
          title: "Thêm mới",
          icon: PlusIcon,
        },
        {
          id: 38,
          title: "Điều chỉnh tiến độ",
          icon: ElectricIcon,
        },
      ],
      icon: FourBlocksIcon,
    },
  },
];

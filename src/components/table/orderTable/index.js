const headerTable = [
  {
    id: 1,
    title: "Mã đơn hàng",
  },
  {
    id: 2,
    title: "Ngày đặt",
  },
  {
    id: 3,
    title: "Khách hàng",
  },
  {
    id: 4,
    title: "Sản phẩm",
  },
  {
    id: 5,
    title: "Số lượng",
  },
  {
    id: 6,
    title: "Tổng tiền",
  },
  {
    id: 7,
    title: "Trạng thái TT",
  },
  {
    id: 8,
    title: "Trạng thái VC",
  },
];

const deliveryType = [
  {
    label: "Đã vận chuyển",
    value: "delivered",
  },
  {
    label: "Đang vận chuyển",
    value: "shipping",
  },
  {
    label: "Đang chờ",
    value: "pending",
  },
  {
    label: "Đã hủy",
    value: "canceled",
  },
];

const paymentType = [
  {
    label: "Chưa thanh toán",
    value: "pending",
  },
  {
    label: "Đã thanh toán",
    value: "successful",
  },
];

export { headerTable, deliveryType, paymentType };

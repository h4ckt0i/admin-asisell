import React from "react";

// Sign In
import SignIn from "~/pages/signIn/signIn";

// Main Pages
const Admin = React.lazy(() => import("~/pages/admin/admin"));

// Order
const OrderDetail = React.lazy(() => import("~/pages/orderDetail/orderDetail"));

// Invoice
const InvoiceDetail = React.lazy(() =>
  import("~/pages/admin/warehouse/invoiceDetail/invoiceDetail")
);

const InvoiceSubWarehouseDetail = React.lazy(() =>
  import(
    "~/pages/admin/warehouse/exportGoods/subWarehouse/invoiceDetail/invoiceDetail"
  )
);

// Depreciation
const DepreciationDetail = React.lazy(() =>
  import("~/pages/admin/depreciation/depreciationDetail/depreciationDetail")
);

// Sub Warehouse Detail
const SubWarehouseDetail = React.lazy(() =>
  import("~/pages/subWarehouseDetail/subWarehouseDetail")
);

const publicRoutes = [
  {
    path: "/",
    component: SignIn,
  },
];

const protectedRoutes = [
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/order-detail/:orderId",
    component: OrderDetail,
  },
  {
    path: "/invoice-detail/:invoiceId",
    component: InvoiceDetail,
  },
  {
    path: "/invoice-sub-warehouse-detail/:invoiceId",
    component: InvoiceSubWarehouseDetail,
  },
  {
    path: "/depreciation-detail/:depreciationId",
    component: DepreciationDetail,
  },
  {
    path: "/sub-warehouse-detail/:subWarehouseId",
    component: SubWarehouseDetail,
  },
];

export { publicRoutes, protectedRoutes };

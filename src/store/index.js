import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./common/slice/productSlice";
import orderReducer from "./common/slice/orderSlice";
import adminReducer from "./common/slice/adminSlice";
import brandReducer from "./common/slice/brandSlice";
import userReducer from "./common/slice/userSlice";
import bankReducer from "./common/slice/bankSlice";
import toDoReducer from "./common/slice/toDoSlice";
import targetReducer from "./common/slice/targetSlice";
import partnerReducer from "./common/slice/partnerSlice";
import supplierReducer from "./common/slice/supplierSlice";
import messageReducer from "./common/slice/messageSlice";
import invoiceReducer from "./common/slice/invoiceSlice";
import categoryReducer from "./common/slice/categorySlice";
import certificateReducer from "./common/slice/certificateSlice";
import subCategoryReducer from "./common/slice/subCategorySlice";
import employeeReducer from "./common/slice/employeeSlice";
import salaryReducer from "./common/slice/salarySlice";
import expenseReducer from "./common/slice/expenseSlice";
import locationReducer from "./common/slice/locationSlice";
import promotionReducer from "./common/slice/promotionSlice";
import adminTypeReducer from "./common/slice/adminTypeSlice";
import subWarehouseReducer from "./common/slice/subWarehouseSlice";
import depreciationReducer from "./common/slice/depreciationSlice";
import serviceSupplierReducer from "./common/slice/serviceSupplierSlice";
import expenseCategoryReducer from "./common/slice/expenseCategorySlice";
import cooperativeSourceReducer from "./common/slice/cooperativeSourceSlice";

// Sub Warehouse Detail
import employeeSubWarehouseReducer from "./subWarehouseDetail/slice/employeeSlice";
import productSubWarehouseReducer from "./subWarehouseDetail/slice/productSlice";
import invoiceSubWarehouseReducer from "./subWarehouseDetail/slice/invoiceSlice";
import partnerSubWarehouseReducer from "./subWarehouseDetail/slice/partnerSlice";
import salarySubWarehouseReducer from "./subWarehouseDetail/slice/salarySlice";
import orderSubWarehouseReducer from "./subWarehouseDetail/slice/orderSlice";

const rootReducer = {
  admin: adminReducer,
  product: productReducer,
  order: orderReducer,
  brand: brandReducer,
  user: userReducer,
  bank: bankReducer,
  toDo: toDoReducer,
  target: targetReducer,
  partner: partnerReducer,
  supplier: supplierReducer,
  message: messageReducer,
  invoice: invoiceReducer,
  category: categoryReducer,
  certificate: certificateReducer,
  subCategory: subCategoryReducer,
  employee: employeeReducer,
  salary: salaryReducer,
  expense: expenseReducer,
  location: locationReducer,
  promotion: promotionReducer,
  adminType: adminTypeReducer,
  depreciation: depreciationReducer,
  subWarehouse: subWarehouseReducer,
  serviceSupplier: serviceSupplierReducer,
  expenseCategory: expenseCategoryReducer,
  cooperativeSource: cooperativeSourceReducer,
  employeeSubWarehouse: employeeSubWarehouseReducer,
  productSubWarehouse: productSubWarehouseReducer,
  invoiceSubWarehouse: invoiceSubWarehouseReducer,
  partnerSubWarehouse: partnerSubWarehouseReducer,
  salarySubWarehouse: salarySubWarehouseReducer,
  orderSubWarehouse: orderSubWarehouseReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: true,
    }),
  stateSanitizer: (state) =>
    state.data ? { ...state, data: "<<LONG_BLOB>>" } : state,
});

export default store;

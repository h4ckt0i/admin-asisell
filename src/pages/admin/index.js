// Dashboard
import Dashboard from "./dashboard/dashboard";

// Statistic
import Statistic from "./statistic/statistic";

// Payment
import Payment from "./payment/payment";

// Orders
import Orders from "./orders/orders";

// Customer
import OverviewCustomer from "./customer/overview/overview";
import Partner from "./customer/partner/partner";

// Messages
import Messages from "./messages/messages";

// Warehouse
import DashboardWarehouse from "./warehouse/dashboard/dashboard";
import Supplier from "./warehouse/supplier/supplier";
import GoodAddition from "./warehouse/goodAddition/goodAddition";
import GoodsManagement from "./warehouse/goodsManagement/goodsManagement";
import ImportGoods from "./warehouse/importGoods/importGoods";
import ExportGoods from "./warehouse/exportGoods/exportGoods";
import RemainingGoods from "./warehouse/remainingGoods/remainingGoods";

// Transportation
import Delivery from "./transportation/delivery/delivery";

// Expense
import DashboardExpense from "./expense/dashboard/dashboard";
import FixedExpense from "./expense/fixedExpense/fixedExpense";
import MobileExpense from "./expense/mobileExpense/mobileExpense";
import InvoiceCreation from "./expense/invoiceCreation/invoiceCreation";

// Employee
import DashboardEmployee from "./employee/dashboard/dashboard";
import SalaryDetail from "./employee/salaryDetail/salaryDetail";
import SalaryAndBonus from "./employee/salaryAndBonus/salaryAndBonus";
import Recruitment from "./employee/recruitment/recruitment";
import EndingDate from "./employee/endingDate/endingDate";

// Depreciation
import DashboardDepreciation from "./depreciation/dashboard/dashboard";
import DepreciationInvoice from "./depreciation/depreciationInvoice/depreciationInvoice";
import HandlingInvoice from "./depreciation/handlingInvoice/handlingInvoice";
import HandlingList from "./depreciation/handlingList/handlingList";

// Promotion
import ListPromotion from "./promotion/list/list";
import Campaigns from "./promotion/campaigns/campaigns";
import CampaignCreation from "./promotion/campaignCreation/campaignCreation";

// Sub Warehouse
import ListWarehouse from "./subWarehouse/list/list";
import AdditionNewSubWarehouse from "./subWarehouse/additionNewSubWarehouse/additionNewSubWarehouse";
import AdditionNewAccount from "./subWarehouse/additionNewAccount/additionNewAccount";

// Target
import Target from "./target/target";

// To-do
import ListToDo from "./toDo/list/list";
import ToDoCreation from "./toDo/toDoCreation/toDoCreation";
import ToDoEdition from "./toDo/toDoEdition/toDoEdition";

export const components = [
  {
    id: 1,
    component: Dashboard,
  },
  {
    id: 2,
    component: Statistic,
  },
  {
    id: 3,
    component: Payment,
  },
  {
    id: 4,
    component: Orders,
  },
  {
    id: 5,
    component: Messages,
  },
  {
    parent: {
      id: 104,
      children: [
        {
          id: 6,
          component: OverviewCustomer,
        },
        {
          id: 7,
          component: Partner,
        },
      ],
    },
  },
  {
    parent: {
      id: 106,
      children: [
        {
          id: 8,
          component: DashboardWarehouse,
        },
        {
          id: 9,
          component: Supplier,
        },
        {
          id: 10,
          component: GoodAddition,
        },
        {
          id: 11,
          component: GoodsManagement,
        },
        {
          id: 12,
          component: ImportGoods,
        },
        {
          id: 13,
          component: ExportGoods,
        },
        {
          id: 14,
          component: RemainingGoods,
        },
      ],
    },
  },
  {
    parent: {
      id: 107,
      children: [
        {
          id: 15,
          component: Delivery,
        },
      ],
    },
  },
  {
    parent: {
      id: 108,
      children: [
        {
          id: 16,
          component: DashboardExpense,
        },
        {
          id: 17,
          component: FixedExpense,
        },
        {
          id: 18,
          component: MobileExpense,
        },
        {
          id: 19,
          component: InvoiceCreation,
        },
      ],
    },
  },
  {
    parent: {
      id: 109,
      children: [
        {
          id: 20,
          component: DashboardEmployee,
        },
        {
          id: 21,
          component: Recruitment,
        },
        {
          id: 22,
          component: SalaryAndBonus,
        },
        {
          id: 23,
          component: SalaryDetail,
        },
        {
          id: 24,
          component: EndingDate,
        },
      ],
    },
  },
  {
    parent: {
      id: 110,
      children: [
        {
          id: 25,
          component: DashboardDepreciation,
        },
        {
          id: 26,
          component: DepreciationInvoice,
        },
        {
          id: 27,
          component: HandlingInvoice,
        },
        {
          id: 28,
          component: HandlingList,
        },
      ],
    },
  },
  {
    parent: {
      id: 111,
      children: [
        {
          id: 29,
          component: ListPromotion,
        },
        {
          id: 30,
          component: Campaigns,
        },
        {
          id: 31,
          component: CampaignCreation,
        },
      ],
    },
  },
  {
    parent: {
      id: 112,
      children: [
        {
          id: 32,
          component: ListWarehouse,
        },
        {
          id: 33,
          component: AdditionNewSubWarehouse,
        },
        {
          id: 34,
          component: AdditionNewAccount,
        },
      ],
    },
  },
  {
    id: 35,
    component: Target,
  },
  {
    parent: {
      id: 114,
      children: [
        {
          id: 36,
          component: ListToDo,
        },
        {
          id: 37,
          component: ToDoCreation,
        },
        {
          id: 38,
          component: ToDoEdition,
        },
      ],
    },
  },
];

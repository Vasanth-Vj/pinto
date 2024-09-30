import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Main from "./components/layout/Main";
import Orders from "./components/orders/Orders";
import ManageMerchant from "./components/merchant/ManageMerchant";
import OnBoarding from "./components/merchant/OnBoarding";
import DeliveryPartner from "./components/deliveryPartner/DeliveryPartner";
import Menu from "./components/menu/Menu";
import AnalyticsReport from "./components/analyticsReport/AnalyticsReport";
import Marketing from "./components/marketing/Marketing";
import Finance from "./components/finance/Finance";
import Staffs from "./components/staffs/Staffs";
import ChatSupport from "./components/chatSupport/ChatSupport";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/merchant" element={<ManageMerchant />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/delivery-partner" element={<DeliveryPartner />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/report" element={<AnalyticsReport />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/staffs" element={<Staffs />} />
          <Route path="/chat" element={<ChatSupport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

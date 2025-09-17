import CheckoutPage from "@/features/checkout/pages/CheckoutPage";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<CheckoutPage />} />
    </Routes>
  );
}

export default Router;
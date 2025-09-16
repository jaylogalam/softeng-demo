import CheckoutPage from "@/features/books/presentation/pages/checkoutPage";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<CheckoutPage />} />
    </Routes>
  );
}

export default Router;
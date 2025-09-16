// Router for Pages
import { Routes, Route } from "react-router-dom";
import Main from "./main";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default Router;

import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Shop from "./Pages/Shop";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kids from "./Pages/Kids";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import Admin from "./Pages/Admin/Admin";
import AddProduct from "./Pages/Admin/AddProduct";
import AllProduct from "./Pages/Admin/AllProduct";
import SingleProduct from "./Pages/Admin/SingleProduct";
import UserSinglePage from "./Pages/UserPages/UserSinglePage/UserSinglePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          {/* UserPages */}

          <Route path="/product/:id" element={<UserSinglePage />} />

          {/* Admin Routes */}
          <Route path="admin" element={<Admin />} />
          <Route path="/admin/addproduct" element={<AddProduct />} />
          <Route path="/admin/allproduct" element={<AllProduct />} />
          <Route path="/admin/singleproduct/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

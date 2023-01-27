import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Form from "./pages/Form";
import Tabel from "./pages/Tabel";
import Add_Customer from "./pages/Add_Customer";
import Forms1 from "./pages/Forms1";
import CustomerList from "./pages/CustomerList";
import AddNewCustomer from "./pages/AddNewCustomer";
import ProductList from "./pages/ProductList";
import AddNewProduct from "./pages/AddNewProduct";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="customerlist" element={<><Header /><CustomerList /><Footer /></>} />
            <Route path="productlist" element={<><Header /><ProductList /><Footer /></>} />
            <Route path="forms" element={<><Header /><Form /><Footer /></>} />
            <Route path="forms1" element={<><Header /><Forms1 /><Footer /></>} />
            <Route path="add_customer" element={<><Header /><Add_Customer /><Footer /></>} />
            <Route path="tabel" element={<><Header /><Tabel /><Footer /></>} />
            <Route path="addnewcustomer" element={<><Header /><AddNewCustomer /><Footer /></>} />
            <Route path="addnewproduct" element={<><Header /><AddNewProduct /><Footer /></>} />
            <Route path="*" element={<Error />} />


          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

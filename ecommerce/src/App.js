import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import LoginPage from './Pages/LoginPage';
import Product from './Pages/Product';
import Products from './Pages/Products';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<> <SignUp />  </>} />
          <Route path="/login" element={<> <Login />  </>} />
          <Route path="/loginPage" element={<> <LoginPage />  </>} />
          <Route path="/home" element={<>   <Header /> <Home />  </>} />
          <Route path="/products" element={<>   <Header /> <Products />  </>} />
          <Route path="/product/:item" element={<>    <Header /><Product />  </>} />
          <Route path="*" element={<> <ErrorPage />  </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// npm i react-hook-form npm i yup
// npm install react-router-dom@6

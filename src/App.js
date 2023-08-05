import "./App.scss";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Login/Login";
import Navbar from "../src/Components/Navbar/Navbar";
import Menu from "../src/Components/Menu/Menu";
import Footer from "../src/Components/Footer/Footer";
import "./Styles/Global.scss";
import { Routes, Route, Outlet } from "react-router-dom";


function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />

        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        
        <Footer />
      </div>
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

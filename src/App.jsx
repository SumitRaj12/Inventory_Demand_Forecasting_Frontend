import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashboardLayout from "./components/DashboardLayout"; 
import Dashboard from "./pages/Dashboard";
import { Toaster } from 'react-hot-toast';
import Product from "./pages/Products.jsx";
import Sales from "./pages/Sales.jsx";
import Employee from "./pages/Employee.jsx";
import Group from "./pages/Group.jsx";
import Forecasting from "./pages/forecast";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard Layout with nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product/>} />
          <Route path="sales" element={<Sales/>} />
          <Route path="group" element={<Group/>} />
          <Route path="employee" element={<Employee/>} />
          <Route path="forecasting" element={<Forecasting/>} />

        </Route>
        
      </Routes>

      
      <Toaster 
        position="top-right"
        reverseOrder={false}
      />
    </Router>
  );
}

export default App;

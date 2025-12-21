import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Employees from "./pages/Employees";
import Assignments from "./pages/Assignments";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/assignments" element={<Assignments />} />
      </Routes>
    </BrowserRouter>
  );
}

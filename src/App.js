import Login from "./pages/login/Login";

import "./App.scss";
import Member from "./pages/memberpage/Member";
import createMember from "./pages/create/createMember";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Member />} />
        <Route path="/add" element={<createMember />} />
      </Routes>
    </BrowserRouter>
  );
}

import Login from "./pages/login/Login";

import "./App.scss";
import Member from "./pages/memberpage/Member";
import CreateMember from "./pages/create/CreateMember";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Member />} />
        <Route path="/add" element={<CreateMember />} />
      </Routes>
    </BrowserRouter>
  );
}

import { Route, Routes, useLocation } from "react-router-dom";

import Member from "../pages/memberpage/Member";
import CreateMember from "../pages/create/CreateMember";
import UpdateMember from "../pages/update page/UpdateMember";
import Login from "../pages/login/Login";
import { AnimatePresence } from "framer-motion";
export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Member />} />
        <Route path="/add" element={<CreateMember />} />
        <Route path="/update" element={<UpdateMember />} />
      </Routes>
    </AnimatePresence>
  );
}

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../pages/landing/loder/Loader";
import Login from "../pages/auth/Login";
import Main from "../pages/company/Main";
import Profile from "../pages/profile/Profile";
// import Company from "../pages/company/Company";
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgotPassword = React.lazy(() => import('../pages/auth/ForgotPassword'));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));




function PrivateRoutes() {
  const isLoggedIn = true;
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/company" element={<Main/>} />
        
        <Route element={<ProtectedRoute isLogin={isLoggedIn} />}>
        <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default PrivateRoutes;

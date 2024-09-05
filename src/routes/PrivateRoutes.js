import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../pages/landing/loder/Loader";
import Login from "../pages/auth/Login";
import Main from "../pages/company/Main";
import Profile from "../pages/profile/Profile";
import { HelpAndFAQ } from "../pages/helpAndFAQ/HelpAndFAQ";
import { QuestionDetail } from "../pages/helpAndFAQ/QuestionDetails";
import UpdateKpiPriority from "../pages/plusIcon/updateKPI/UpdateKpiPriority";
import { AddPriority } from "../pages/plusIcon/updateKPI/AddPriority";
import AddPeriod from "../pages/plusIcon/updateKPI/AddPeriod";
import { PriorityList } from "../pages/plusIcon/priority/PriorityList";
import TaskForm from "../pages/plusIcon/task/TaskForm";
import CreateStuck from "../pages/plusIcon/stuck/CreateStuck";
import CreateSuggestion from "../pages/plusIcon/suggestion/CreateSuggestion";
import CreateMetric from "../pages/plusIcon/metric/CreateMetric";
import SendInvitation from "../pages/plusIcon/sendInvitation/SendInvitation";
import AcceptInvitation from "../pages/plusIcon/sendInvitation/AcceptInvitation";
import CreateHuddle from "../pages/plusIcon/huddle/CreateHuddle";
import HuddleSelection from "../pages/plusIcon/huddle/HuddleSelection";
import KPIList from "../pages/adminstrastion/kpi/ListKpi";
import CompanyList from "../pages/adminstrastion/companyProfile/CompanyList";
import CompanyDashboard from "../pages/CompanyDashboard/CompanyDashboard";
import AnnualInitiatives from "../pages/AnnualInitiatives/AnnualInitiatives";
import OnePageStrategicPlan from "../pages/OnePageStrategicPlan/OnePageStrategicPlan";
import AlignmentChecklist from "../pages/AlignmentChecklist/AlignmentChecklist";
import FourDVisionSummeryIndex from "../pages/FourDVisionSummery/FourDVisionSummeryIndex";
import FunctionalAccountabilityIndex from "../pages/FunctionalAccountability/FunctionalAccountabilityIndex";
import ProcessAccountabilityIndex from "../pages/ProcessAccountability/ProcessAccountabilityIndex";
import SevenStrataIndex from "../pages/SevenStrata/SevenStrataIndex";
import CashAccelerationStrategiesIndex from "../pages/CashAccelerationStrategies/CashAccelerationStrategiesIndex";
import CashPowerOfOneIndex from "../pages/CashPowerOfOne/CashPowerOfOneIndex";
import ManageEnpsIndex from "../pages/ManageEnps/ManageEnpsIndex";
import ManageENPSSchedule from "../pages/ManageEnps/ManageENPSSchedule";
import EnpsResultsIndex from "../pages/ManageEnps/ENPSResults/EnpsResultsIndex";
// import { CreateHuddle } from "../pages/plusIcon/huddle/CreateHuddle";
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
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/annual-initiatives" element={<AnnualInitiatives />} />
          <Route path="/one-page-strategic-plan" element={<OnePageStrategicPlan />} />
          <Route path="/alignment-checklist" element={<AlignmentChecklist />} />
          <Route path="/four-d-vision-summery" element={<FourDVisionSummeryIndex />} />
          <Route path="/functional-accountability" element={<FunctionalAccountabilityIndex />} />
          <Route path="/process-accountability" element={<ProcessAccountabilityIndex />} />
          <Route path="/seven-strata" element={<SevenStrataIndex />} />
          <Route path="/cash-acceleration-strategies" element={<CashAccelerationStrategiesIndex />} />
          <Route path="/cash-power-of-one" element={<CashPowerOfOneIndex />} />
          <Route path="/manage-enps" element={<ManageEnpsIndex />} />
          <Route path="/enps-schedule" element={<ManageENPSSchedule />} />
          <Route path="/enps-results" element={<EnpsResultsIndex />} />
          <Route path="/help" element={<HelpAndFAQ />} />
          <Route path="/kpi" element={<UpdateKpiPriority />} />
          <Route path="/priority" element={<AddPriority />} />
          <Route path="/period" element={<AddPeriod />} />
          <Route path="/priority-list" element={<PriorityList />} />
          <Route path="/task" element={<TaskForm />} />
          <Route path="/stuck" element={<CreateStuck />} />
          <Route path="/create-huddle" element={<HuddleSelection />} />
          <Route path="/huddle" element={<CreateHuddle />} />
          <Route path="/suggestion" element={<CreateSuggestion/>} />
          <Route path="/metric" element={<CreateMetric/>} />
          <Route path="/invite-user" element={<SendInvitation/>} />
          <Route path="/accept-invite/:token" element={<AcceptInvitation/>} />
          <Route path="/question/:id" element={<QuestionDetail />} />
          {/* Adminstrastion */}
          <Route path="/kpi-listing" element={<KPIList />} />
          <Route path="/company-profile/:id" element={<CompanyList />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default PrivateRoutes;

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
import UserList from "../pages/adminstrastion/manageUser/UserList";
import ResetPassword from "../pages/adminstrastion/manageUser/PasswordReset";
import ListHuddles from "../pages/adminstrastion/huddle/ListHuddles";
import CompanySettingList from "../pages/adminstrastion/companySettings/CompanySettingList";
import ReportList from "../pages/report/ReportList";
import PersonalPrioritiesReport from "../pages/report/priority/PersonalPriority";
import TaskReport from "../pages/report/taskReport/TaskReport";
import StuckReport from "../pages/report/stuck/StuckReport";
import HuddleReport from "../pages/report/huddle/HuddleReport";
import UserReport from "../pages/report/user/UserReport";
import AnnouncementList from "../pages/culture/announcement/AnnouncementList";
import SuggestionList from "../pages/culture/suggestion/SuggestionList";
import SurveyList from "../pages/culture/survey/SurveyList";
import CreateSurvey from "../pages/culture/survey/CreateSurvey";
import ProccessAccontibility from "../pages/strategy/ProccessAccontibility";
import SevenStrata from "../pages/strategy/7Starta/SevenStrata";
import CashAccelerationStrategies from "../pages/strategy/CashAccelerationStrategies";
import CashPowerOfOne from "../pages/strategy/CashPowerOfOne";
import SurveyResultsIndex from "../pages/culture/survey/SurveyResults/SurveyResultsIndex";
import ManageEnps from "../pages/culture/Enps/ManageEnps";
import ManageEnpsSchedule from "../pages/culture/Enps/ManageEnpsSchedule";
import EnpsResultsIndex from "../pages/culture/Enps/ENPSResults/EnpsResultsIndex";
import EnpsSurveyResponse from "../pages/culture/Enps/EnpsSurveyResponse";
import FunctionalAccountabilityIndex from "../pages/strategy/Functional Accountability/FunctionalAccountabilityIndex";
import FourDVisionSummeryIndex from "../pages/strategy/4DVision/FourDVisionSummeryIndex";
import AlignmentChecklist from "../pages/strategy/Alignment Checklist/AlignmentChecklist";
import OnePageStrategicPlan from "../pages/strategy/OnePageStrategicPlan/OnePageStrategicPlan";
import CompanyProfile from "../pages/adminstrastion/companyProfile/CompanyProfile";
import HuddleForm from "../pages/adminstrastion/huddle/EditHuddle";
import HuddleClone from "../pages/adminstrastion/huddle/CloneHuddles";

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
          <Route path="/help" element={<HelpAndFAQ />} />
          <Route path="/kpi" element={<UpdateKpiPriority />} />
          <Route path="/priority" element={<AddPriority />} />
          <Route path="/period" element={<AddPeriod />} />
          <Route path="/priority-list" element={<PriorityList />} />
          <Route path="/task" element={<TaskForm />} />
          <Route path="/stuck" element={<CreateStuck />} />
          <Route path="/create-huddle" element={<HuddleSelection />} />
          <Route path="/huddle" element={<CreateHuddle />} />
          <Route path="/edit-huddle/:id" element={<HuddleForm />} />
          <Route path="/clone-huddle/:id" element={<HuddleClone />} />
          <Route path="/suggestion" element={<CreateSuggestion/>} />
          <Route path="/metric" element={<CreateMetric/>} />
          {/* <Route path="/invite-user" element={<SendInvitation/>} /> */}
          <Route path="/accept-invite/:token" element={<AcceptInvitation/>} />
          <Route path="/question/:id" element={<QuestionDetail />} />
          {/* Adminstrastion */}
          <Route path="/manage-user" element={<UserList />} />
          <Route path="/manage-huddle" element={<ListHuddles />} />
          <Route path="/company-settings" element={<CompanySettingList />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/kpi-listing" element={<KPIList />} />
          <Route path="/company-profile" element={<CompanyProfile />} />

          {/* report */}
          <Route path="/report" element={<ReportList />} />
          <Route path="/personal-report" element={<PersonalPrioritiesReport />} />
          <Route path="/task-report" element={<TaskReport />} />
          <Route path="/stuck-report" element={<StuckReport />} />
          <Route path="/huddle-report" element={<HuddleReport />} />

          {/* culture */}
          <Route path="/enps" element={<ManageEnps />} />
          <Route path="/schedule" element={<ManageEnpsSchedule />} />
          <Route path="/enps-result/:id" element={<EnpsResultsIndex />} />
          <Route path="/enps-survey/:surveyId/respond" element={<EnpsSurveyResponse />} />
          <Route path="/surveys" element={<SurveyList />} />
          <Route path="/create-survey" element={<CreateSurvey />} />
          <Route path="/survey-results/:id" element={<SurveyResultsIndex />} />  
          <Route path="/announcements" element={<AnnouncementList />} />
          <Route path="/suggestions" element={<SuggestionList />} />
          
          {/* strategy */}
          <Route path="/one-page-strategic-plan" element={<OnePageStrategicPlan />} />
          <Route path="/alignment-checklist" element={<AlignmentChecklist />} />
          <Route path="/four-d-vision" element={<FourDVisionSummeryIndex />} />
          <Route path="/function-accountability" element={<FunctionalAccountabilityIndex />} />
          <Route path="/proccess-accountability" element={<ProccessAccontibility />} />
          <Route path="/SevenStrata" element={<SevenStrata />} />
          <Route path="/CashAccelerationStrategies" element={<CashAccelerationStrategies />} />
          <Route path="/CashPowerOfOne" element={<CashPowerOfOne />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default PrivateRoutes;

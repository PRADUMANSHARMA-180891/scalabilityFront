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
import ManageEnpsIndex from "../pages/Culture/ManageEnps/ManageEnpsIndex";
import ManageENPSSchedule from "../pages/Culture/ManageEnps/ManageENPSSchedule";
import EnpsResultsIndex from "../pages/Culture/ManageEnps/ENPSResults/EnpsResultsIndex";
import SurveyList from "../pages/Culture/Surveys/SurveyList";
import CreateSurvey from "../pages/Culture/Surveys/CreateSurvey";
import AnnouncementList from "../pages/Culture/Announcements/AnnouncementList";
import SuggestionList from "../pages/Culture/Suggestions/SuggestionList";
import SurveyResultsIndex from "../pages/Culture/Surveys/SurveyResults/SurveyResultsIndex";
import ReportList from "../pages/report/ReportList";
import PersonalPrioritiesReport from "../pages/report/priority/PersonalPriority";
import TaskReport from "../pages/report/taskReport/TaskReport";
import StuckReport from "../pages/report/stuck/StuckReport";
import HuddleReport from "../pages/report/huddle/HuddleReport";
import AlignmentReportIndex from "../pages/report/Alignment/AlignmentReportIndex";
import StrategyReportIndex from "../pages/report/Strategy/StrategyReportIndex";
import OnePagePersonalPlanIndex from "../pages/profile/OnePagePersonalPlan/OnePagePersonalPlanIndex";
import PriorityStatusByNameIndex from "../pages/report/PriorityStatusByName/PriorityStatusByNameIndex";
import PriorityStatusReportindex from "../pages/report/PriorityStatusReport/PriorityStatusReportindex";
import PriorityStatusWithDetailsIndex from "../pages/report/PriorityStatusWithDetails/PriorityStatusWithDetailsIndex";
import UserList from "../pages/adminstrastion/manageUser/UserList";
import StucksByNeedHelpFromReport from "../pages/report/StucksByNeedHelpFrom/StucksByNeedHelpFromReport";
import StucksByStuckUserReportIndex from "../pages/report/StucksByStuckUser/StucksByStuckUserReportIndex";
import DailyHuddlesSummaryReportIndex from "../pages/report/DailyHuddlesSummary/DailyHuddlesSummaryReportIndex";
import HuddlesSummaryReportIndex from "../pages/report/HuddlesSummaryReport/HuddlesSummaryReportIndex";
import DailyTopPriorityReport from "../pages/report/DailyTopPriority/DailyTopPriorityReport";
import DailyTopPriorityPerformanceReportIndex from "../pages/report/DailyTopPriorityPerformance/DailyTopPriorityPerformanceReportIndex";
import UserReport from "../pages/report/user/UserReport";
import ParticipationReportIndex from "../pages/report/ParticipationReport/ParticipationReportIndex";
import ListHuddles from "../pages/adminstrastion/huddle/ListHuddles";
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
          <Route path="/one-page-personal-plan" element={<OnePagePersonalPlanIndex />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/annual-initiatives" element={<AnnualInitiatives />} />
          {/* Strategy */}
          <Route path="/one-page-strategic-plan" element={<OnePageStrategicPlan />} />
          <Route path="/alignment-checklist" element={<AlignmentChecklist />} />
          <Route path="/four-d-vision-summery" element={<FourDVisionSummeryIndex />} />
          <Route path="/functional-accountability" element={<FunctionalAccountabilityIndex />} />
          <Route path="/process-accountability" element={<ProcessAccountabilityIndex />} />
          <Route path="/seven-strata" element={<SevenStrataIndex />} />
          <Route path="/cash-acceleration-strategies" element={<CashAccelerationStrategiesIndex />} />
          <Route path="/cash-power-of-one" element={<CashPowerOfOneIndex />} />
          {/* Strategy */}
          {/* Culture */}
          {/* enps */}
          <Route path="/manage-enps" element={<ManageEnpsIndex />} />
          <Route path="/enps-schedule" element={<ManageENPSSchedule />} />
          <Route path="/enps-results" element={<EnpsResultsIndex />} />
          {/* survey */}
          <Route path="/surveys" element={<SurveyList />} />
          <Route path="/create-survey" element={<CreateSurvey />} />          
          <Route path="/survey-results" element={<SurveyResultsIndex />} />          
          {/* Announcement List */}
          <Route path="/announcement-list" element={<AnnouncementList />} />
          {/* Suggestion List */}
          <Route path="/suggestion-list" element={<SuggestionList />} />
          {/* Culture end */}
          {/* Reports */}
          <Route path="/report" element={<ReportList />} />
          <Route path="/personal-report" element={<PersonalPrioritiesReport />} />
          <Route path="/task-report" element={<TaskReport />} />
          <Route path="/stuck-report" element={<StuckReport />} />
          <Route path="/huddle-report" element={<HuddleReport />} />
          <Route path="/alignment-report" element={<AlignmentReportIndex />} />
          <Route path="/strategy-report" element={<StrategyReportIndex />} />
          <Route path="/priority-status-name" element={<PriorityStatusByNameIndex />} />
          <Route path="/priority-status-report" element={<PriorityStatusReportindex />} />
          <Route path="/priority-status-report-details" element={<PriorityStatusWithDetailsIndex />} />
          <Route path="/stucks-by-need-help-from-report" element={<StucksByNeedHelpFromReport />} />
          <Route path="/stucks-by-stuck-user-report" element={<StucksByStuckUserReportIndex />} />
          <Route path="/daily-huddles-summary-report" element={<DailyHuddlesSummaryReportIndex />} />
          <Route path="/huddles-summary-report" element={<HuddlesSummaryReportIndex />} />
          <Route path="/daily-top-priority-report" element={<DailyTopPriorityReport />} />
          <Route path="/daily-top-priority-performance-report" element={<DailyTopPriorityPerformanceReportIndex />} />
          <Route path="/user-list-report" element={<UserReport />} />
          <Route path="/participation-report" element={<ParticipationReportIndex />} />
          {/* Reports End*/}
          <Route path="/help" element={<HelpAndFAQ />} />
          <Route path="/kpi" element={<UpdateKpiPriority />} />
          <Route path="/priority" element={<AddPriority />} />
          <Route path="/period" element={<AddPeriod />} />
          <Route path="/priority-list" element={<PriorityList />} />
          <Route path="/task" element={<TaskForm />} />
          <Route path="/stuck" element={<CreateStuck />} />
          
          <Route path="/huddle" element={<CreateHuddle />} />
          <Route path="/suggestion" element={<CreateSuggestion/>} />
          <Route path="/metric" element={<CreateMetric/>} />
          <Route path="/invite-user" element={<SendInvitation/>} />
          <Route path="/accept-invite/:token" element={<AcceptInvitation/>} />
          <Route path="/question/:id" element={<QuestionDetail />} />
          {/* Adminstrastion Start*/}
          <Route path="/kpi-listing" element={<KPIList />} />
          <Route path="/company-profile/:id" element={<CompanyList />} />
          <Route path="/manage-user" element={<UserList />} />
          <Route path="/manage-huddle" element={<ListHuddles />} />
          <Route path="/create-huddle" element={<HuddleSelection />} />
          {/* Adminstrastion Start*/}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default PrivateRoutes;

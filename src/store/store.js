import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../pages/auth/AuthSlice";
import CompanySlice from "../pages/company/CompanySlice";
import  announcementSlice  from "../pages/announcement/AnnouncementSlice";
import  HelpAndFAQ  from "../pages/helpAndFAQ/HelpAndFAQSlice";
import PrioritySlice from "../pages/plusIcon/updateKPI/PrioritySlice";
import PeriodSlice from "../pages/plusIcon/updateKPI/PeriodSlice";
import TaskSlice from "../pages/plusIcon/task/TaskSlice"
import StuckSlice from "../pages/plusIcon/stuck/StuckSlice";
import SuggestionSlice from "../pages/plusIcon/suggestion/SuggestionSlice";
import MetricSlice from "../pages/plusIcon/metric/MetricSlice";
// import SendInvitation from "../pages/plusIcon/sendInvitation/SendInvitation";
import SendInvitationSlice from "../pages/plusIcon/sendInvitation/SendInvitationSlice";
import HuddleSlice from "../pages/plusIcon/huddle/HuddleSlice";
import KpiSlice from "../pages/adminstrastion/kpi/KpiSlice";
import tagSlice  from "../pages/adminstrastion/companySettings/CompanySettingsSlice"
import surveyReducer from "../pages/culture/survey/SurveySlice"
import EnpsSlice from "../pages/culture/Enps/EnpsSlice";
import proccessAccountabilitySlice from "../pages/strategy/StrategySlice"
import AlignmentChecklistSlice from "../pages/strategy/Alignment Checklist/AlignmentChecklistSlice";
import FoundationSlice from "../pages/strategy/OnePageStrategicPlan/FoundationSlice";
import SupportingSlice from "../pages/strategy/OnePageStrategicPlan/SupportingSlice";
import ThemeTitleSlice from "../pages/strategy/OnePageStrategicPlan/ThemeTitleSlice";
import threeToFive1Slice from "../pages/strategy/OnePageStrategicPlan/ThreeYearsTargetSlice";
import threeToFive1Slice2 from "../pages/strategy/OnePageStrategicPlan/FiveYearsTargetSlice";
import QuaterlyTargetSlice from "../pages/strategy/OnePageStrategicPlan/QuaterlyTargetSlice";

const store = configureStore({
    reducer: {
      auth: AuthSlice,
      company: CompanySlice,
      announcement: announcementSlice,
      helpfaq:HelpAndFAQ,
      priority: PrioritySlice,
      period: PeriodSlice,
      tasks : TaskSlice,
      stuck: StuckSlice,
      suggestion: SuggestionSlice,
      metric: MetricSlice,
      invite : SendInvitationSlice,
      huddle: HuddleSlice,
      kpi: KpiSlice,
      tag: tagSlice,
      survey: surveyReducer,
      enps: EnpsSlice,
      strategy: proccessAccountabilitySlice,
      alignmentChecklist: AlignmentChecklistSlice,
      foundation: FoundationSlice,
      support: SupportingSlice,
      theme: ThemeTitleSlice,
      threeyearplan: threeToFive1Slice,
      fiveyearplan: threeToFive1Slice2,
      quaterly: QuaterlyTargetSlice
    }
  });
  
  export default store;
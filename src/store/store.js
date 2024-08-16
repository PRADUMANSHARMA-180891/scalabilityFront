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
      kpi: KpiSlice
    }
  });
  
  export default store;
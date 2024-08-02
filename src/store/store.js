import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../pages/auth/AuthSlice";
import CompanySlice from "../pages/company/CompanySlice";
import  announcementSlice  from "../pages/announcement/AnnouncementSlice";
import  HelpAndFAQ  from "../pages/helpAndFAQ/HelpAndFAQSlice";
import PrioritySlice from "../pages/plusIcon/updateKPI/PrioritySlice";
import PeriodSlice from "../pages/plusIcon/updateKPI/PeriodSlice";
import TaskSlice from "../pages/plusIcon/task/TaskSlice"
import StuckSlice from "../pages/plusIcon/stuck/StuckSlice";




const store = configureStore({
    reducer: {
      auth: AuthSlice,
      company: CompanySlice,
      announcement: announcementSlice,
      helpfaq:HelpAndFAQ,
      priority: PrioritySlice,
      period: PeriodSlice,
      tasks : TaskSlice,
      stuck: StuckSlice
    }
  });
  
  export default store;
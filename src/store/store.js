import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../pages/auth/AuthSlice";
import CompanySlice from "../pages/company/CompanySlice";
import  announcementSlice  from "../pages/announcement/AnnouncementSlice";
import  HelpAndFAQ  from "../pages/helpAndFAQ/HelpAndFAQSlice";


const store = configureStore({
    reducer: {
      auth: AuthSlice,
      company: CompanySlice,
      announcement: announcementSlice,
      helpfaq:HelpAndFAQ
    }
  });
  
  export default store;
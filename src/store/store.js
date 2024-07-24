import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../pages/auth/AuthSlice";
import CompanySlice from "../pages/company/CompanySlice";
import  announcementSlice  from "../pages/announcement/AnnouncementSlice";


const store = configureStore({
    reducer: {
      auth: AuthSlice,
      company: CompanySlice,
      announcement: announcementSlice,
    }
  });
  
  export default store;
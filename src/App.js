import React, { useEffect } from "react";
import PrivateRoutes from "./routes/PrivateRoutes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <PrivateRoutes />
      <ToastContainer />
    </>
  );
}

export default App;

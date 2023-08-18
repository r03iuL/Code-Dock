import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from './providers/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import "./index.css";
import { router } from './Routes/Routes';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider>
  <HelmetProvider>
   <div className='max-w-screen-xl mx-auto bg-slate-50'>
    <RouterProvider router={router} />
    </div>
   </HelmetProvider>
  </AuthProvider>
  </React.StrictMode>,
);

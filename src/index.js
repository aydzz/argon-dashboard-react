/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

/**Customizations */
import { ApplicationCtxProvider } from "contexts/ApplicationContext";
import { AuthProvider } from "contexts/AuthContext";

import PrivateRoute from "components/Routes/PrivateRoute";
import PublicLayout from "layouts/PublicLayout";

import Dashboard from "views/private/Dashboard";
import Starter from "views/private/Starter";
import NotFound from "views/public/NotFound";
import Login from "views/public/Login";
import Register from "views/public/Register";
import Profile from "views/examples/Profile";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ApplicationCtxProvider>
      <AuthProvider>
        <Routes>
          {/* Old Routes */}
          {/* <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/auth/*" element={<AuthLayout />} />
          <Route path="*" element={<Navigate to="/admin/index" replace />} /> */}

           {/* Public Routes / Layout */}
           <Route exact path="*" element={<NotFound></NotFound>}/>
            <Route path="/" element={<PublicLayout/>}>
              <Route exact path="" element={<Navigate to={"login"}/>}></Route>
              <Route exact path="login" element={<Login/>}></Route>
              <Route exact path="register" element={<Register/>}></Route>
            </Route>
          {/* Private Routes */}
          <Route exact path="/app" element={<PrivateRoute></PrivateRoute>}>
            <Route exact path="starter" element={<Starter/>}/>
            <Route exact path="dashboard" element={<Dashboard/>}/>
            
            <Route exact path="profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </ApplicationCtxProvider>
  </BrowserRouter>
);
      

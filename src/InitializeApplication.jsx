import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard.jsx"));
const Form = lazy(() => import("./pages/Form/Form.jsx"));
const Page404 = lazy(() => import("./pages/Page404/Page404.jsx"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};

const InitializeApplication = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default InitializeApplication;

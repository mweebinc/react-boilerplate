import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Queue from "nq";
import AppProvider from "./AppProvider";
import SignInPage from "./pages/signin/SignInPage";
import MainPage from "./pages/main/MainPage";
import SignUpPage from "./pages/signup/SignUpPage";
import TenantPage from "./pages/AppTenantPage";

Queue.setUrl("https://api.innque.com/v1");
Queue.setApplicationId("16e70e68-3596-42cf-88b0-0f12176bc37b");

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/app" element={<TenantPage />} />
          <Route path="/*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

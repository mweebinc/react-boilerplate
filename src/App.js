import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Queue from "nq";
import AppProvider from "./AppProvider";
import SignInPage from "./pages/signin/SignInPage";
import MainPage from "./pages/main/MainPage";
import SignUpPage from "./pages/signup/SignUpPage";
import TenantPage from "./pages/AppTenantPage";

Queue.setUrl("https://api.innque.com/v1");
Queue.setApplicationId("your-app-id-here"); // Replace with your actual application ID

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

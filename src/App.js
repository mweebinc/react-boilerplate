import {BrowserRouter, Routes, Route} from "react-router-dom";
import AppProvider from "./AppProvider";
import SignInPage from "./pages/signin/SignInPage";
import MainPage from "./pages/main/MainPage";
import SignUpPage from "./pages/signup/SignUpPage";
import React from "react";


function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<SignInPage/>}/>
                    <Route path="/signin" element={<SignInPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/*" element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;

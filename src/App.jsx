import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import Sidebar from "./components/sidebar";
import AgentSignup from "./agent/components/Agentsignup";
import AgentLogin from "./agent/components/Agentlogin";
import AgentSidebar from "./agent/components/AgentSidebar";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/app" element={<Sidebar />} />
            </Routes>
            <Routes>
                <Route path="/Agentsignup" element={<AgentSignup />} />
                <Route path="/AgentLogin" element={<AgentLogin />} />
                <Route path="/Agentsidebar" element={<AgentSidebar />} />
            </Routes>
        </BrowserRouter>
    );
}

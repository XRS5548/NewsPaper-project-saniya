import React, { useState } from "react";
import Profile from "../pages/Profile.jsx";
import AttendanceCalendar from "../pages/AttendanceCalendar.jsx";
import Payment from "../pages/Payment.jsx";
import Newspaper from "../pages/Newspaper.jsx";
import Agent from "../pages/Agent.jsx";
import History from "../pages/History.jsx";

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState("profile");

    const renderContent = () => {
        switch (activeSection) {
            case "profile":
                return <Profile />;
            case "calendar":
                return <AttendanceCalendar />;
            case "payment":
                return <Payment />;
            case "newspaper":
                return <Newspaper />;
            case "agent":
                return <Agent />;
            case "history":
                return <History />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
            {/* Sidebar */}
            <div className="bg-white w-full md:w-64 p-6 border-r border-pink-300 flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Menu</h2>
                {[
                    { name: "Profile", key: "profile" },
                    { name: "Calendar", key: "calendar" },
                    { name: "Payment", key: "payment" },
                    { name: "Newspaper", key: "newspaper" },
                    { name: "Agent", key: "agent" },
                    { name: "History", key: "history" },
                ].map(item => (
                    <button
                        key={item.key}
                        onClick={() => setActiveSection(item.key)}
                        className={`text-left py-2 px-4 rounded-lg ${activeSection === item.key ? "bg-pink-600 text-white" : "hover:bg-pink-50"
                            }`}
                    >
                        {item.name}
                    </button>
                ))}
            </div>


            <div className="flex-1 p-6">{renderContent()}</div>
        </div>
    );
}

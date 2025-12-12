import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiUsers, FiClipboard, FiList, FiBookOpen, FiCheckCircle } from "react-icons/fi";

export default function AgentSidebar() {
    const { pathname } = useLocation();

    const menu = [
        { name: "Customer List", path: "/agent/customers", icon: <FiUsers /> },
        { name: "Daily Attendance", path: "/agent/attendance", icon: <FiCheckCircle /> },
        { name: "Paper Quantity", path: "/agent/paper-qty", icon: <FiClipboard /> },
        { name: "Paper Allotment", path: "/agent/allotment", icon: <FiList /> },
        { name: "Detailed Records", path: "/agent/detail-records", icon: <FiBookOpen /> },
    ];

    return (
        <div className="w-64 h-screen bg-white border-r p-5 shadow-md">
            <h1 className="text-2xl font-bold mb-8 text-orange-600">Agent Panel</h1>

            <nav className="space-y-4">
                {menu.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 p-3 rounded-lg text-lg 
              ${pathname === item.path ? "bg-orange-100 text-orange-600 font-semibold" : "text-gray-700"}
              hover:bg-orange-50 transition`}
                    >
                        {item.icon} {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

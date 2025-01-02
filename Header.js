// src/components/Shared/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gradient-to-r from-purple-600 to-blue-400 text-white fixed">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Akhila's Calendar App</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-gray-300">Dashboard</Link>
            </li>
            <li>
              <Link to="/calendar" className="hover:text-gray-300">Calendar</Link>
            </li>
            <li>
              <Link to="/notifications" className="hover:text-gray-300">Notifications</Link>
            </li>
            <li>
              <Link to="/Admin/companies" className="hover:text-gray-300">Companies</Link>
            </li>
            <li>
              <Link to="/Admin/communication-methods" className="hover:text-gray-300">Communication</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

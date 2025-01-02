// src/components/User/Dashboard.js
import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-bold">Upcoming Events</h3>
        <p>No events scheduled yet.</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-bold">Pending Notifications</h3>
        <p>You have 5 new notifications.</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-bold">Admin Overview</h3>
        <p>Manage 10 companies.</p>
      </div>
    </div>
  );
};

export default Dashboard;

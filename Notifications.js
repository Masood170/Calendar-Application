import React from "react";

const Notifications = () => {
  const overdueTasks = ["Company A - Email", "Company B - Call"];
  const dueToday = ["Company C - Visit"];

  return (
    <div>
      <h2 className="text-xl font-bold">Notifications</h2>
      <div>
        <h3 className="text-lg font-bold">Overdue</h3>
        <ul>
          {overdueTasks.map((task, index) => (
            <li key={index} className="text-red-500">
              {task}
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-bold">Due Today</h3>
        <ul>
          {dueToday.map((task, index) => (
            <li key={index} className="text-yellow-500">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;

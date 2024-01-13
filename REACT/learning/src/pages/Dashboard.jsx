import React from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <header>
        <Link to="/">Logo</Link>
        <nav>
          <Link to="/dashboard/rasta">Pricing</Link>
          <Link to="/dashboard/banty">Settings</Link>
          <Link to="/dashboard/rastaxarm/settings/profile">Home</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>&copy; {new Date().getFullYear()}. All right reserved</footer>
    </div>
  );
};

export default DashboardLayout;

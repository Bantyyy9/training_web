import { Link, Outlet } from "react-router-dom";
import UsersList from "../components/UsersList";

const Homepage = () => {
  return (
    <div className="flex h-screen">
      <section className="flex-1 max-w-[280px] bg-slate-300 px-4 py-2 flex flex-col gap-2">
        <header>
          <Link to="/" className="font-bold text-blue-500">
            Bantology Users
          </Link>
        </header>
        <UsersList />
      </section>
      <section className="flex-3">
        <Outlet />
      </section>
    </div>
  );
};

export default Homepage;

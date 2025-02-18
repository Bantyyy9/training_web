import { Outlet } from "react-router-dom";
import UserPostsList from "../components/UserPostsList";

const PostsPage = () => {
  return (
    <div className="flex">
      <section className="flex-1 h-screen bg-blue-200 flex flex-col gap-3 p-5">
        <header>
          <h2>User Posts</h2>
        </header>
        <UserPostsList />
      </section>
      <section className="flex-3">
        <Outlet />
      </section>
    </div>
  );
};

export default PostsPage;

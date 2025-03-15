import { Outlet } from "react-router";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";

const PageLayout = () => {
  return (
    <div className="w-full dark:bg-appBlack1 dark:text-appGray2 lg:max-w-[46rem] mx-auto px-4 lg:px-0 flex gap-10 flex-col min-h-screen">
      <Header />
      <SearchBox />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;

import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaBookAtlas } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="shadow-md sticky top-0 z-50 bg-sky-500 flex items-center max-sm:hidden w-[15%] h-[100vh] justify-center">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4  flex-col h-[95vh]">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-100">Divine</span>
            <span className="text-slate-100">Estate </span>
          </h1>
        </Link>
        <h1 className="font-bold text-sm sm:text-sm flex flex-wrap flex-col h-[63vh] gap-7 cursor-pointer">
          <span className="text-slate-100 hover:border-r-2 border-slate-100 w-[120%] flex items-center gap-3">
            <RxDashboard />
            Dashboard
          </span>
          <span className="text-slate-100 hover:border-r-2 border-slate-100 w-[120%] flex gap-3 items-center">
            <FaBookAtlas /> Courses
          </span>
          <span className="text-slate-100 hover:border-r-2 border-slate-100 w-[120%] flex gap-3 items-center">
            <HiDocumentText />
            Blog
          </span>
          <span className="text-slate-100 hover:border-r-2 border-slate-100 w-[120%] flex items-center gap-3">
            <MdAccountCircle /> My Profile
          </span>
          <span className="text-slate-100 hover:border-r-2 border-slate-100 w-[120%] flex items-center gap-3">
            <IoChatboxEllipses /> Help Center
          </span>
        </h1>
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-100">Dark Mode</span>
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;

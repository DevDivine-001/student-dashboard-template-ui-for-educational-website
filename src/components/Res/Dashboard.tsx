import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaBookAtlas } from "react-icons/fa6";
import { useState } from "react";
import { GiSpellBook } from "react-icons/gi";
// VscLayers

const Dashboard = () => {
  const [wide, setWide] = useState(false);

  return (
    <div
      style={{ width: wide ? "6%" : "15%" }}
      className="shadow-md sticky top-0 z-50 bg-sky-500 flex items-center max-sm:hidden  max-lg:hidden h-[100vh] justify-center"
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4  flex-col h-[95vh]">
        <Link to="/">
          <div className="text-sm sm:text-xl flex justify-center items-center ] bg-[]">
            <GiSpellBook size={55} className="text-[#ffff]" />
          </div>
        </Link>
        <h1 className="font-bold text-sm sm:text-sm flex flex-wrap flex-col h-[63vh] gap-7 cursor-pointer">
          <span
            onClick={() => setWide(!wide)}
            className="text-slate-100 hover:border-r-2 border-slate-100 w-[120%] flex items-center gap-3"
          >
            <RxDashboard />
            {!wide && "Dashboard"}
          </span>
          <Link to="/courses">
            <span className="text-slate-100 hover:border-r-2 border-slate-100 w-[120%] flex gap-3 items-center">
              <FaBookAtlas /> {!wide && "Courses"}
            </span>
          </Link>
          <Link to="/blog">
            <span className="text-slate-100 hover:border-r-2 border-slate-100 w-[120%] flex gap-3 items-center">
              <HiDocumentText />
              {!wide && "Blog"}
            </span>
          </Link>
          <Link to="/profile">
            <span className="text-slate-100 hover:border-r-2 border-slate-100 w-[120%] flex items-center gap-3">
              <MdAccountCircle /> {!wide && "My Profile"}
            </span>
          </Link>
          <Link to="/helpcenter">
            <span className="text-slate-100 hover:border-r-2 border-slate-100 w-[120%] flex items-center gap-3">
              <IoChatboxEllipses /> {!wide && "Help Center"}
            </span>
          </Link>
        </h1>
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-100">Dark Mode</span>
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;

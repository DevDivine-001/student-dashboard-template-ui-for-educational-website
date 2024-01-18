import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-[white] max-sm:w-svw">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4 ">
        <form
          action=""
          className="border p-3 rounded-lg flex items-center justify-center gap-3"
        >
          <FaSearch className="text-slate-600" />
          <input
            type="text"
            placeholder="Search "
            className="bg-transparent focus:outline-none w-24 sm:w-64 cursor-pointer"
          />
        </form>

        <div className="flex justify-center items-center p-2 gap-7">
          <FaSearch className="text-slate-600" />
          <FaBell size={20} className="text-sky-500 cursor-pointer" />
          <div className="flex items-center gap-3">
            <Link to="/profile">
              <img
                src=""
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] bg-sky-500 border-sky-500 border"
              />
            </Link>
            <div className="flex flex-col justify-center max-sm:hidden">
              <small>Divine Uwandu</small>
              <small>Divine Uwandu34@Gmail.com</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

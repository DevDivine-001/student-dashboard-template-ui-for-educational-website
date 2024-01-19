import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscHeartFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, Setshow] = useState<boolean>(false);
  const onshow = () => {
    Setshow(!show);
  };
  return (
    <header className="sticky top-0 z-50 max-sm:w-svw bg-[#fff]">
      <div className="flex justify-between items-center p-3">
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

        <div className="flex justify-center items-center gap-3">
          <VscHeartFilled size={20} className="text-sky-500 cursor-pointer" />
          <FaBell size={20} className="text-sky-500 cursor-pointer" />
          <div className="flex items-center gap-3">
            <Link to="/profile">
              <img
                src=""
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] bg-sky-500 border-sky-500 border"
              />
            </Link>
            <div className="flex flex-col justify-center max-sm:hidden max-md:hidden max-lg:hidden">
              <small>Divine Uwandu</small>
              <small>Divine Uwandu34@Gmail.com</small>
            </div>
            <RiArrowDropDownLine
              size={20}
              onClick={onshow}
              className="text-red-500 cursor-pointer max-sm:flex max-2xl:hidden max-lg:flex"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

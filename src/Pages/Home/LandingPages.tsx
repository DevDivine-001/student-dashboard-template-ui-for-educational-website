import Dashboard from "../../components/Res/Dashboard";
import HomePages from "./HomePages";

const LandingPages = () => {
  return (
    <div className="flex h-auto w-[100%]">
      <Dashboard />
      <HomePages />
    </div>
  );
};

export default LandingPages;

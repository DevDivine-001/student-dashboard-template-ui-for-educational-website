import Dashboard from "../../components/Res/Dashboard";
import HomePages from "./HomePages";

const LandingPages = () => {
  return (
    <div className="flex bg-[] h-[100vh] w-[100%]">
      <Dashboard />
      <HomePages />
    </div>
  );
};

export default LandingPages;

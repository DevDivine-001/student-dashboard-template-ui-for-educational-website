import { IoIosArrowRoundForward } from "react-icons/io";

const View = () => {
  return (
    <section className="flex justify-between p-3 w-[100%] bg-[] flex-wrap max-sm:flex-row gap-3">
      <div className=" max-md:w-[100%] max-lg:w-full h-auto w-[75%] bg-[#] flex justify-between flex-col max-sm:gap-3 max-md:gap-3 max-lg:gap-3">
        <span className=" font-bold">Overview</span>

        <div className="max-sm:w-full max-lg:w-full h-auto flex justify-between max-sm:flex-col gap-4">
          <div className="flex gap-5 items-center bg-[#ffff] p-2 rounded-md max-sm:w-full">
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-[26%] h-[45px] flex object-cover rounded-md justify-center items-center"
            />
            <small className="flex flex-col">
              <span className="text-slate-300">Course in Progress</span>
              <span className="font-bold">6</span>
            </small>
          </div>
          <div className="flex gap-5 items-center bg-[#ffff] p-2 rounded-md ">
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-[26%] h-[45px] flex object-cover rounded-md justify-center items-center"
            />
            <small className="flex flex-col">
              <span className="text-slate-300">Compleated Courses</span>
              <span className="font-bold">11</span>
            </small>
          </div>

          <div className="flex gap-5 items-center bg-[#ffff] p-2 rounded-md ">
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-[26%] h-[45px] flex object-cover rounded-md justify-center items-center"
            />
            <small className="flex flex-col">
              <span className="text-slate-300">Certificates Earned</span>
              <span className="font-bold">3</span>
            </small>
          </div>
        </div>
        <span className="font-bold">Recommended</span>

        <div className=" max-md:w-[100%] max-lg:w-full h-auto flex justify-between max-sm:flex-col gap-4">
          <div className="flex gap-5 bg-[#ffff] p-2 rounded-md flex-col w-[26%] max-sm:w-full">
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-[100%] h-[103px] flex object-cover rounded-md justify-center items-center cursor-pointer"
            />
            <div className="flex justify-between items-center">
              <small className="flex flex-col">
                <span className="font-bold">css</span>
                <span className="text-slate-300">35 lessons 35 hours</span>
              </small>
              <div className="bg-sky-500 justify-center items-center flex p-2 rounded-md cursor-pointer">
                <IoIosArrowRoundForward size={20} />
              </div>
            </div>
          </div>
          <div className="flex gap-5 bg-[#ffff] p-2 rounded-md flex-col w-[26%] max-sm:w-full">
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-[100%] h-[103px] flex object-cover rounded-md justify-center items-center cursor-pointer"
            />
            <div className="flex justify-between items-center">
              <small className="flex flex-col">
                <span className="font-bold">Beginning to HTML</span>
                <span className="text-slate-300">65 lessons 145 hours</span>
              </small>
              <div className="bg-sky-500 justify-center items-center flex p-2 rounded-md cursor-pointer">
                <IoIosArrowRoundForward size={20} />
              </div>
            </div>
          </div>
          <div className="flex gap-5 bg-[#ffff] p-2 rounded-md flex-col w-[26%] max-sm:w-full">
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-[100%] h-[103px] flex object-cover rounded-md justify-center items-center cursor-pointer"
            />
            <div className="flex justify-between items-center">
              <small className="flex flex-col">
                <span className="font-bold">DevOps engineer..</span>
                <span className="text-slate-300">25 lessons 45 hours</span>
              </small>
              <div className="bg-sky-500 justify-center items-center flex p-2 rounded-md cursor-pointer">
                <IoIosArrowRoundForward size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="max-md:w-full max-lg:w-full h-auto w-[22%] flex gap-2 flex-col justify-between max-sm:gap-4">
        <article className="font-bold">Continue studying</article>
        <div className="bg-[#ffff] p-2 rounded-md max-sm:w-full">
          <div className="flex gap-5 items-center">
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-[26%] h-[45px] flex object-cover rounded-md justify-center items-center"
            />
            <small className="flex flex-col">
              <span className="font-bold">Neaxt.</span>
              <span className="text-slate-300">25 lessons 45 hours</span>
            </small>
          </div>
        </div>
        <div className="bg-[#ffff] p-2 rounded-md">
          <div className="flex gap-5 items-center">
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-[26%] h-[45px] flex object-cover rounded-md justify-center items-center"
            />
            <small className="flex flex-col">
              <span className="font-bold">AWS Cloud</span>
              <span className="text-slate-300">65 lessons 145 hours</span>
            </small>
          </div>
        </div>
        <div className="bg-[#ffff] p-2 rounded-md">
          <div className="flex gap-5 items-center">
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-[26%] h-[45px] flex object-cover rounded-md justify-center items-center"
            />
            <small className="flex flex-col">
              <span className="font-bold">Java Script</span>
              <span className="text-slate-300">25 lessons 25 hours</span>
            </small>
          </div>
        </div>
        <div className="bg-[#ffff] p-2 rounded-md">
          <div className="flex gap-5 items-center">
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-[26%] h-[45px] flex object-cover rounded-md justify-center items-center"
            />
            <small className="flex flex-col">
              <span className="font-bold">Full Stack</span>
              <span className="text-slate-300">25 lessons 65 hours</span>
            </small>
          </div>
        </div>
      </section>
    </section>
  );
};

export default View;

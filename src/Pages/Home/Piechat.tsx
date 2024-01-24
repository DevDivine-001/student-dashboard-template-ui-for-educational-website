import { IoIosArrowRoundForward } from "react-icons/io";

const Piechat = () => {
  return (
    <section className="flex justify-between p-3 w-[100%] flex-wrap max-sm:flex-row gap-3">
      <div className=" max-md:w-full max-lg:w-full h-auto w-[75%] flex justify-between max-sm:flex-col gap-4 bg-[#] flex-col">
        <article></article>
        <nav className="flex justify-between max-sm:flex-col gap-4 max-lg:flex-col">
          <div className="flex justify-between bg-[#ffff] p-2 rounded-md flex-col w-[26%] max-sm:w-full max-lg:w-full">
            <img
              src="https://media.istockphoto.com/id/613119832/photo/pie-chart-financial-concept.jpg?s=612x612&w=0&k=20&c=j4whEncZbpwl7Y4FmU-A8hQV9rFnqDe8w2_vYee9G6Y="
              alt=""
              className="w-[100%] h-[150px] flex object-cover rounded-md justify-center items-center cursor-pointer"
            />
            <div className="flex justify-between items-center">
              <small className="flex flex-col">
                <span className="font-bold">pie charts</span>
                <span className="text-slate-300">25 lessons 45 hours</span>
              </small>
              <div className="bg-sky-500 justify-center items-center flex p-2 rounded-md cursor-pointer">
                <IoIosArrowRoundForward size={20} />
              </div>
            </div>
          </div>

          <div className="flex justify-between bg-[#ffff] p-2 rounded-md flex-col w-[26%] max-sm:w-full max-lg:w-full">
            <img
              src="https://media.istockphoto.com/id/1492739169/photo/business-connecting-chart-in-a-hand.jpg?s=612x612&w=0&k=20&c=v24LlEJ_cgSiJEQq_wXkzG6qtTbe8NBnVlSVcdlKU-s="
              alt=""
              className="w-[100%] h-[150px] flex object-cover rounded-md justify-center items-center cursor-pointer"
            />
            <div className="flex justify-between items-center">
              <small className="flex flex-col">
                <span className="font-bold">pie charts</span>
                <span className="text-slate-300">12 lessons 45 hours</span>
              </small>
              <div className="bg-sky-500 justify-center items-center flex p-2 rounded-md cursor-pointer">
                <IoIosArrowRoundForward size={20} />
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="max-md:w-full max-lg:w-full  h-auto w-[22%] flex flex-col justify-between">
        <article className="text-[#000] font-bold">Daily Article</article>
        <div className=" bg-[#fff] flex justify-between flex-col p-2 gap-1">
          <img
            src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-[100%] h-[150px] flex object-cover rounded-md justify-center items-center cursor-pointer"
          />

          <div className="flex flex-col">
            <small className="">How to build strong..</small>
            <span className="flex justify-between">
              <span className="text-slate-200">12 Minutes</span>
              <span className="text-sky-500">Read More</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Piechat;

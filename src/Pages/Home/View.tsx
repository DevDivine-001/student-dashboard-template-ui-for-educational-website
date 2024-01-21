const View = () => {
  return (
    <section className="">
      <div className="flex justify-between p-3 w-[100%] bg-[] flex-wrap max-sm:flex-row gap-3">
        {/* <section className=" max-md:w-[100%] max-lg:w-full h-auto w-[75%] bg-[#000] flex justify-between flex-col">
          <span className=" font-bold">Overview</span>

          <div className=" max-md:w-[100%] max-lg:w-full h-auto flex justify-between max-sm:flex-col gap-4">
            <div className="flex gap-5 items-center bg-[#ffff] p-2 rounded-md ">
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
            <div className="flex gap-5 items-center bg-[#ffff] p-2 rounded-md ">
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

            <div className="flex gap-5 items-center bg-[#ffff] p-2 rounded-md ">
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
          <span className="font-bold">Recommended</span>
          <div></div>
        </section> */}

        <section className="max-md:w-full max-lg:w-full h-auto w-[22%] flex gap-2 flex-col justify-between max-sm:gap-4">
          <article className=" font-bold">Contiune studying</article>
          <div className="bg-[#ffff] p-2 rounded-md">
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
      </div>
    </section>
  );
};

export default View;

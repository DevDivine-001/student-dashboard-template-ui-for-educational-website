const Piechat = () => {
  return (
    <section className="">
      <div className="flex justify-between p-3 w-[100%] flex-wrap max-sm:flex-row gap-3">
        <div className=" max-md:w-[100%] max-lg:w-full h-[235px] w-[75%] bg-[#000] flex flex-col justify-between"></div>
        <div className="max-md:w-full max-lg:w-full  h-auto w-[22%] flex flex-col justify-between">
          <article className="text-[#000] font-bold">Daily Article</article>
          <div className="flex justify-center items-center bg-[#fff] h-[200px] flex-col rounded-md gap-1">
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-[92%] h-[140px] flex object-cover rounded-md justify-center items-center"
            />

            <div className="flex  object-cover  w-[92%] flex-col">
              <small className="">How to build strong..</small>
              <span className="flex justify-between">
                <span className="text-slate-200">12 Minutes</span>
                <span className="text-sky-500">Read More</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Piechat;

import CountUp from "react-countup";

const Stats = () => {
  return (
    <>
      <div className="mt-32 md:flex h-[150px] ">
        <div className="md:w-[50%] md:bg-sky-200 text-center items-center">
          <CountUp
            start={0}
            end={1090}
            duration={5}
            separator=""
            decimals={0}
            decimal=""
            prefix=""
            suffix=""
          >
            {({ countUpRef }) => (
              <div className="md:mt-14">
                <span className="text-5xl text-sky-600" ref={countUpRef} />
                <span className="ml-4 font-semibold text-2xl">Total Cars</span>
              </div>
            )}
          </CountUp>
        </div>
        <div className=" ml-[70px] md:mt-14 md:ml-32 ">
          <CountUp
            start={1}
            end={2560}
            duration={5}
            separator=""
            decimals={0}
            decimal=""
            prefix=""
            suffix=""
          >
            {({ countUpRef }) => (
              <div>
                <span className="text-5xl text-sky-600" ref={countUpRef} />
                <span className="ml-4 font-semibold text-2xl">
                  Happy Customers
                </span>
              </div>
            )}
          </CountUp>
        </div>
      </div>
    </>
  );
};

export default Stats;

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-[#305D5D] text-white py-16 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-12 px-4">
        {/* Years Experience */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold">
            {inView ? <CountUp end={40} duration={4} suffix="+" /> : "0+"}
          </h2>
          <p className="text-xl font-semibold mt-2">Years Experience</p>
          <p className="mt-2 text-sm md:text-base">
            Providing compassionate and effective Individual and Couples Therapy
          </p>
        </div>

        {/* Individual Client Sessions */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold">
            {inView ? (
              <CountUp end={45000} duration={4} separator="," suffix="+" />
            ) : (
              "0+"
            )}
          </h2>
          <p className="text-xl font-semibold mt-2">
            Individual Client Sessions
          </p>
          <p className="mt-2 text-sm md:text-base">
            Helping individuals and couples heal, grow, and find purpose
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;

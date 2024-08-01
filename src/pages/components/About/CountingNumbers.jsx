import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const CountingNumbers = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    onChange: (inView) => {
      if (inView) {
        setHasAnimated(true);
      }
    },
  });
  return (
    <div
      ref={ref}
      className="respPx20 py-10 bg-sunrise text-white flex gap-10  justify-evenly flex-wrap"
    >
      <div className="flex flex-col items-center  gap-2">
        <CountUp
          end={60}
          start={hasAnimated ? 0 : null}
          className="text-white font-extrabold text-4xl"
        />
        <h3 className="text-white font-extrabold text-xl uppercase">
          Teachers
        </h3>
      </div>
      <div className="flex flex-col items-center  gap-2">
        <CountUp
          end={50}
          start={hasAnimated ? 0 : null}
          className="text-white font-extrabold text-4xl"
        />
        <h3 className="text-white font-extrabold text-xl uppercase">Courses</h3>
      </div>
      <div className="flex flex-col items-center  gap-2">
        <CountUp
          end={1000}
          start={hasAnimated ? 0 : null}
          className="text-white font-extrabold text-4xl"
        />
        <h3 className="text-white font-extrabold text-xl uppercase">
          Students
        </h3>
      </div>
      <div className="flex flex-col items-center  gap-2">
        <CountUp
          end={3737}
          start={hasAnimated ? 0 : null}
          className="text-white font-extrabold text-4xl"
        />
        <h3 className="text-white font-extrabold text-xl uppercase">
          SATISFIED CLIENT
        </h3>
      </div>
    </div>
  );
};

export default CountingNumbers;

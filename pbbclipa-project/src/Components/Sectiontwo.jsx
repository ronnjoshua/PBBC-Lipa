import React from "react";
import Subscribeform from "../forms/Subscribeform";

const Sectiontwo = () => {
  return (
    <section className="flex justify-center flex-col text-center">
      <div className="flex justify-center text-center">
        <h1 className="flex text-6xl max-w-[30rem] mt-[1rem]">
          PILGRIMS BIBLE BAPTIST CHURCH LIPA
        </h1>
      </div>
      <div className="mb-[3rem]">
        <p>Inspiring Impactful Change</p>
      </div>
      <div className="section-4-remaining">
        <Subscribeform />
      </div>
    </section>
  );
};

export default Sectiontwo;

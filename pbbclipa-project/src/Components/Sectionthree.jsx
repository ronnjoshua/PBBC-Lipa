import React from "react";

const Sectionthree = ({randomPicture}) => {
  return (
    <section className="md:grid md:grid-cols-2">
      <div className="flex flex-col text-center md:p-20 border p-14 ">
        <article className="md:flex md:flex-col md:self-center md:max-w-[28rem] ">
          <h2 className="mt-[1rem] mb-[2rem] text-[2rem]">ABOUT US</h2>
          <p className="">
            Here at Pilgrim Bible Baptist Church Lipa, we are riven to do our
            part in making the world a better place. Since 2015, we have taken
            part in a wide range of activities that empower individuals and
            communities. We strive to build productive relationships and make a
            positive impact with all our pursuits. Are you ready to join us and
            create real transformation in the lives of so many?
          </p>
          <div className="flex">
            <button>Contact</button>
          </div>
        </article>
      </div>
      <div className="md:flex md:flex-col md:border">
        <aside className="flex flex-col">
          <img src={randomPicture} className="bg-cover bg-no-repeat" />
        </aside>
      </div>
    </section>
  );
};

export default Sectionthree;

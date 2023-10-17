import React from 'react'

const Sectionseven = () => {
    const section9A = [
        "LESSON LEARNED: THE KEY TO NON-PROFIT PROGRAM EVALUATION",
        "INTERVIEW WITH PILGRIMS BIBLE BAPTIST CHURCH DIRECTOR",
        "HOW VOLUNTEERING IN PBBCL CAN MAKE A WORLD OF DIFFERENCE",
      ];

  return (
    <section className="flex text-center md:justify-around flex-col md:flex-row justify-center">
        {section9A.map((txt) => {
          return (
            <div>
              <img />
              <h3 className="md:max-w-[18rem] md:text-[1.6rem] md:pt-[3rem] md:pb-[1rem] md:min-w-[15rem] mx-auto max-w-[16rem] text-[1.6rem] pt-[3rem] pb-[1rem]">
                {txt}
              </h3>
              <p className="pb-[3rem]">Learn More</p>
            </div>
          );
        })}
        </section>
  )
}

export default Sectionseven
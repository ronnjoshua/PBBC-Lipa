import React from "react";

const Sectionone = ({randomPicture}) => {
  return (
    <section className="h-56">
      <img src={randomPicture} className="h-56 w-full" />
    </section>
  );
};

export default Sectionone;

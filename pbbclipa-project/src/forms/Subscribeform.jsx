import React from "react";

const Subscribeform = () => {
  return (
    <>
      <p className="subscribe-p">Subscribe Form</p>
      <form className="mb-[3rem]">
        <input type="text" placeholder="eg.,email@example.com" />
        <span>
          <button>JOIN</button>
        </span>
      </form>
    </>
  );
};

export default Subscribeform;

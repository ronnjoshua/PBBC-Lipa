import React from "react";
import randomPicture from "../src/assets/2.jpeg";
import menuIcon from "../src/assets/bars-solid.svg";

const App = () => {
  const section9A = [
    "LESSON LEARNED: THE KEY TO NON-PROFIT PROGRAM EVALUATION",
    "INTERVIEW WITH PILGRIMS BIBLE BAPTIST CHURCH DIRECTOR",
    "HOW VOLUNTEERING IN PBBCL CAN MAKE A WORLD OF DIFFERENCE",
  ];

  return (
    <div>
      <header className="flex justify-center">
        PILGRIMS BIBLE BAPTIST CHURCH LIPA
      </header>
      <div className="separator"></div>
      <nav className="flex justify-center h-[2rem]">
        <img
          src={menuIcon}
          className="ml-auto mr-[0.5rem] h-[2rem] md:hidden"
        />
        <ul className="md:flex md:space-x-10 hidden">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html">About Us</a>
          </li>
          <li>
            <a href="/Contact/contact.html">Contact</a>
          </li>
          <li>Projects</li>
          <li>FAQ</li>
          <li>Get Involved</li>
        </ul>
      </nav>
      <div className="separator"></div>
      <section className="h-56">
        <img src={randomPicture} className="h-56 w-full" />
      </section>
      <div className="separator"></div>
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
          <p className="subscribe-p">Subscribe Form</p>
          <form className="mb-[3rem]">
            <input type="text" placeholder="eg.,email@example.com" />
            <span>
              <button>JOIN</button>
            </span>
          </form>
        </div>
      </section>
      <div className="separator"></div>
      <section className="md:grid md:grid-cols-2">
        <div className="flex flex-col text-center md:p-20 border p-14 ">
          <article className="md:flex md:flex-col md:self-center md:max-w-[28rem] ">
            <h2 className="mt-[1rem] mb-[2rem] text-[2rem]">ABOUT US</h2>
            <p className="">
              Here at Pilgrim Bible Baptist Church Lipa, we are riven to do our
              part in making the world a better place. Since 2015, we have taken
              part in a wide range of activities that empower individuals and
              communities. We strive to build productive relationships and make
              a positive impact with all our pursuits. Are you ready to join us
              and create real transformation in the lives of so many?
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
      <div className="separator"></div>
      <section className="flex flex-col text-center">
        <h1 className="mt-[1rem] mb-[0.5rem] p-0">WAYS WE HELP</h1>
        <p className="mt-[0.5rem] mb-[1rem] p-0">The Focus of Our Efforts</p>
      </section>
      <div className="separator"></div>
      <section className="">
        <div className="md:grid md:grid-cols-3">
          <div className="border">
            <img src={randomPicture} className="bg-cover bg-no-repeat" />
          </div>
          <div className="px-20 py-10 text-center border">
            <h3 className="mb-8">VOLUNTEERING</h3>
            <p>
              Feeling like there are countless pressing issues that no single
              program could make a marked difference. Our Volunteering
              initiative has proven to be a powerful tool for Pilgrims Bible
              Baptist Church Lipa to successfully serve our community and
              improve countless lives.
            </p>
          </div>
          <div className="section-7-top-div" id="right-img">
            <img src={randomPicture} className="bg-cover bg-no-repeat" />
          </div>
        </div>
        <div className="md:grid md:grid-cols-3">
          <div className="px-20 py-10 text-center border">
            <h3 className="mb-8">COMMUNITY OUTREACH</h3>
            <p>
              Pilgrims Bible Baptist Church Lipa is a leader in the sector and
              ensures that local need and priorities come first. Our Community
              Outreach program offers a much-desired platform for people who
              deserve it most. Become a part of a brighter future and join our
              efforts today.
            </p>
          </div>
          <div className="section-7-bottom-div-img">
            <img src={randomPicture} className="bg-cover bg-no-repeat" />
          </div>
          <div className="px-20 py-10 text-center border">
            <h3 className="mb-8">LOCAL EMPOWERMENT</h3>
            <p>
              The Local EMpowerment program is our longest running initiative,
              based on the premise that making a real difference is not only
              possible but vital. At Pilgrim Bible Baptist Church Lipa, Local
              Empowerment is a source of great pride for our Christian
              Organization.
            </p>
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="text-center">
        <div>
          <h2 className="pt-[1rem] pb-[0.5rem] text-[2rem]">MEDIA CENTER</h2>
          <p className="pt-[0.5rem] pb-[1rem]">Stay in the Know</p>
        </div>
      </section>
      <div className="separator"></div>
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
        {/* <div className="">
          <img />
          <h3 className="md:max-w-[15rem] md:text-[1.6rem] md:pt-[3rem] md:pb-[1rem] md:min-w-[15rem]">INTERVIEW WITH PILGRIMS BIBLE BAPTIST CHURCH DIRECTOR</h3>
          <p className="pb-[3rem]">Learn More</p>
        </div>
        <div className="section-9-div">
          <img />
          <h3 className="max-w-[15rem] text-[1.6rem] pt-[3rem] pb-[1rem] min-w-[15rem]">LESSON LEARNED: THE KEY TO NON-PROFIT PROGRAM EVALUATION</h3>
          <p className="pb-[3rem]">Learn More</p>
        </div>
        <div className="section-9-div">
          <img />
          <h3 className="max-w-[18rem] text-[1.6rem] pt-[3rem] pb-[1rem] min-w-[15rem]">HOW VOLUNTEERING IN PBBCL CAN MAKE A WORLD OF DIFFERENCE</h3>
          <p className="pb-[3rem]">Learn More</p>
        </div> */}
      </section>
      <div className="separator"></div>
      <section className="flex justify-between">
        <div className="section-10-div-img">
          <img src="img/2.jpeg" />
        </div>
        <div className="">
          <h2>ON TIME OR ON TIME</h2>
          <p>Truly Top-Notch</p>
          <p>
            This is your Feature description. Write a short blurb explaining
            what the feature is and why it matters for visitors, customers or
            clients. Don't be afraid to toot your own horn! Take this
            opportunity to emphasize the important benefits or key advantages.
          </p>
        </div>
      </section>
      <div className="separator"></div>
      <section className="section-11">
        <img src="img/47943476848_c4ab5f20b4_o.jpg" />
      </section>
      <div className="separator"></div>
      <section className="section-12">
        <div className="section-12-div">
          <h2>DONATE</h2>
          <p>
            This is your donation form. Encourage your site visitors to make a
            donation today b providing additional information about your
            organization, how their contribution can best help achieve your
            goals.
          </p>
        </div>
        <div className="section-12-form">
          <form className="section-12-form-inp">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <textarea>Comments</textarea>
          </form>
          <div>
            <button className="submit-button">SUBMIT</button>
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <footer>
        <h2>Pilgrims Bible Baptist Church Lipa</h2>
        <div className="separator"></div>
        <span>&copy;2023 by Pilgrims Bible Baptist Church Lipa</span>
      </footer>
    </div>
  );
};

export default App;

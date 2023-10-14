import React from "react";
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import randomPicture from "./assets/2.jpeg";
import Sectionone from './Components/Sectionone';
import Sectiontwo from './Components/Sectiontwo';
import Sectionthree from './Components/Sectionthree';
import Sectionfour from './Components/Sectionfour';
import Sectionfive from './Components/Sectionfive';
import Sectionsix from './Components/Sectionsix';


const App = () => {
  const section9A = [
    "LESSON LEARNED: THE KEY TO NON-PROFIT PROGRAM EVALUATION",
    "INTERVIEW WITH PILGRIMS BIBLE BAPTIST CHURCH DIRECTOR",
    "HOW VOLUNTEERING IN PBBCL CAN MAKE A WORLD OF DIFFERENCE",
  ];

  return (
    <div>
      <Header />
      <div className="separator"></div>
      <Navbar />
      <div className="separator"></div>
      <Sectionone randomPicture={randomPicture}/>
      <div className="separator"></div>
      <Sectiontwo />
      <div className="separator"></div>
      <Sectionthree />
      <div className="separator"></div>
      <Sectionfour />
      <div className="separator"></div>
      <Sectionfive randomPicture={randomPicture}/>
      <div className="separator"></div>
      <Sectionsix />
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

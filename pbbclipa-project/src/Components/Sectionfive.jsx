import React from 'react'

const Sectionfive = ({randomPicture}) => {
  return (
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
  )
}

export default Sectionfive
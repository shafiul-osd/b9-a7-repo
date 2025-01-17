import React from 'react';

function Banner() {
  return (
    <div className='max-w-[1440px] mx-auto my-5'>
      <div className="hero min-h-[70vh] w-[90%] mx-auto rounded-2xl overflow-hidden" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/tasty-fresh-appetizing-italian-food-ingredients-dark-background-ready-cook-home-italian-healthy-food-cooking-concept-toning_1220-1820.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-10/12">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div className="flex gap-3 justify-center items-center">
              <button className="btn btn-success rounded-2xl text-white">Explore Now</button>
              <button className="btn btn-outline btn-accent rounded-2xl text-white">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

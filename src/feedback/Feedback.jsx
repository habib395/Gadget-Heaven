import React from "react";
import { Helmet } from "react-helmet";

const Feedback = () => {
  return (
    <div>
      <Helmet>
        <title>Feedback | Gadget Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] text-center py-10">
        <div className="w-full mx-auto">
          <div className="flex flex-col w-full justify-center items-center text-white">
            <h2 className="text-xl w-full mx-auto md:text-2xl lg:text-5xl font-semibold mb-4">
              Feedback
            </h2>
          </div>
          <p className="text-sm md:text-base w-1/2 mx-auto text-center font-thin text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="text--[#9538E2] p-3 w-11/12 mx-auto">
      <div className="sm:flex card-side border-2 border-[#9538E2] rounded-md p-2">
        <figure>
          <img src="https://i.ibb.co.com/hFZqdFn/Screenshot-1.png" alt="" />
        </figure>
        <div className="sm:card-title">
        <h2 className="card-body">Apple MacBook Air M1</h2>
        <p>
        "Absolutely love the MacBook Air M1! It's incredibly lightweight and the performance is top-notch. The battery life is phenomenal, and it handles all my tasks effortlessly. Highly recommend!"
        </p>
        </div>
      </div>
      <div className="sm:flex card-side border-2 border-[#9538E2] rounded-md mt-5 p-2">
        <figure>
          <img src="https://i.ibb.co.com/dDXRwk0/samsung.png" alt="" />
        </figure>
        <div className="sm:card-title">
        <h2 className="card-body">Samsung Galaxy Watch 4</h2>
        <p>
        "A fantastic smartphone with a smooth display and excellent camera quality. It's fast and reliable, perfect for photography and gaming. Just wish the battery life was slightly better."
        </p>
        </div>
      </div>
      <div className="sm:flex card-side border-2 border-[#9538E2] rounded-md mt-5 p-2">
        <figure>
          <img src="https://i.ibb.co.com/RPSMpGf/g-fourteen.png" alt="" />
        </figure>
        <div className="sm:card-title">
        <h2 className="card-body">ASUS ROG Zephyrus G14</h2>
        <p>
        "Compact yet powerful! Perfect for gaming on the go. The build quality is solid, and the performance exceeds expectations. Highly recommended for gamers!"
        </p>
        </div>
      </div>
      <div className="sm:flex card-side border-2 border-[#9538E2] rounded-md mt-5 p-2">
        <figure>
          <img src="https://i.ibb.co.com/9pTQQXX/acer.png" alt="" />
        </figure>
        <div className="sm:card-title">
        <h2 className="card-body">Acer Predator Orion 3000</h2>
        <p>
        "An incredible gaming desktop with top-tier performance. The graphics are stunning, and it handles heavy games effortlessly. Couldn't be happier!"
        </p>
        </div>
      </div>
      <div className="sm:flex card-side border-2 border-[#9538E2] rounded-md mt-5 p-2">
        <figure>
          <img src="https://i.ibb.co.com/CMcggRk/razer.png" alt="" />
        </figure>
        <div className="sm:card-title">
        <h2 className="card-body">Razer Blade 15 Base</h2>
        <p>
        "An amazing gaming laptop with excellent build quality. It's fast, and the display is crisp and smooth. Couldn't be happier with my purchase!"
        </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Feedback;

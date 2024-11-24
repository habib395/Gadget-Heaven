import React from "react";
import { Helmet } from "react-helmet";

const Feedback = () => {
  return (
    <div>
      <Helmet>
        <title>Feedback | Gadget Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] py-10 text-center">
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
    </div>
  );
};

export default Feedback;

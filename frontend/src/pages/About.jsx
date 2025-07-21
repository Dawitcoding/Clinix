import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Wellcome to Clinix Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Suscipit officia recusandae ea blanditiis quaerat
            facere tenetur ullam laboriosam, minima iure aliquid magni nam?
            Delectus, quam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Itaque cupiditate sit officia quia libero doloribus eius,
            placeat dolorem. Repellendus, modi.
          </p>
          <p>
            Clinix is commited to Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Reiciendis explicabo doloremque ad temporibus
            labore eum amet nemo molestiae eveniet doloribus. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Pariatur amet quo dolorem
            consequuntur, neque est.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision in Clinix is Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut perferendis, commodi saepe dolorem molestiae
            incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quae odio sapiente expedita!
          </p>
        </div>
      </div>

      <div className="text-xl my-10">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

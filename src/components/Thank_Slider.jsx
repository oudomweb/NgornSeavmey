import React from "react";
import { FaHeart, FaHandPeace, FaSmile } from "react-icons/fa";
import Test1 from "../assets/img/test.jpg";

const ThankYou = () => {
  return (
    <section
      id="thank-you"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6"
    >
      <div className="text-center max-w-xl">
        <h2
        style={{fontFamily: '"Roboto Slab", sans-serif'}}
          className="text-4xl md:text-5xl font-bold mb-6 text-dark"
          data-aos="fade-down "
        >
          Thank <span>You</span>!
        </h2>

        <img
          src={Test1}
          alt="Thank You"
          className="rounded-2xl shadow-lg mx-auto mb-6 transition-transform duration-500 hover:scale-105"
          style={{ maxWidth: "400px", width: "100%" }}
          data-aos="zoom-in"
        />

        <p style={{fontSize : "18px"}} className="text-lg text-gray-300 mb-6 text-dark " data-aos="fade-up">
          I truly appreciate your time and attention.
        </p>

        <div
          className="flex justify-center gap-6 text-cyan-400 text-3xl mt-6"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{color : "black"}}
        >
          <FaHeart title="Love"  color="red" fontSize={30}/>
          <span className="px-2"></span>
          <FaHandPeace title="Peace" fontSize={30}/>
            <span className="px-2"></span>
          <FaSmile title="Happiness"  fontSize={30}/>
        </div>
      </div>
    </section>
  );
};  

export default ThankYou;

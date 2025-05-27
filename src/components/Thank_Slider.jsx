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
      </div>
    </section>
  );
};  

export default ThankYou;

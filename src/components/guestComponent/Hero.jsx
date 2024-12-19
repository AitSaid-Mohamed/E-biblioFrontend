import React from "react";
import { Link } from "react-router-dom";
import { URLS } from "../../router/URLS";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-start  py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover amazing content and learn more about what we offer.
        </p>
        <div className="flex space-x-4">
          <Link
            to={URLS.GUEST.BOOKS}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

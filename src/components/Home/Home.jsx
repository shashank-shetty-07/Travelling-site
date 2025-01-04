import React from "react";
import NavBar from "../Navbar/NavBar";
import ChooseUs from "../why choose us/ChooseUs";
import TravelCards from "../travelServices/TravelCards";
import DescriptionCard from "../travelServices/DescriptionCard";
import BookingSection from "../booking/BookingSection";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <main className="bg-gray-100 text-gray-800">
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-[100vh] flex flex-col"
          style={{ backgroundImage: "url('/img6.png')" }}
        >
          <div>
            <NavBar/>
          </div>
          <div className="mt-[10rem] flex ml-[4rem]">
            <div>
              <div className="text-center text-white px-6">
                <h1 className="text-5xl font-bold mb-4">
                  Discover Your Next Adventure
                </h1>
                <p className="text-lg mb-8">
                  Explore amazing destinations around the world with us.
                </p>

                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center mx-auto w-[200px] shadow-xl text-lg bg-sky-700 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                  Start
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>

                {/* Social Media Icons */}
                <div className="mt-6 flex justify-center space-x-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-2xl"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 text-2xl"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 text-2xl"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 text-2xl"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <section className=" mt-3 "><h3 className=" mb-5 text-center font-bold text-3xl font-serif">TRAVELLING SERIVCES</h3><TravelCards/></section>

      <section className=" mt-3 "><h3 className=" mb-5 text-center font-bold text-3xl font-serif">Short Description</h3><DescriptionCard/>/</section>
      <ChooseUs/>
      <section className=" mt-3 "><h3 className=" mb-5 text-center font-bold text-3xl font-serif"></h3> {/* Call to Action */}
      <section className=" text-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8">Sign up now and get exclusive travel deals!</p>
          <button className="bg-lime-300 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Start Planning
          </button>
        </div>
      </section>/</section>

     <section className=" mt-3 "><h3 className=" mb-5 text-center font-bold text-3xl font-serif"></h3><Footer/></section>
    </div>
  );
};

export default Home;


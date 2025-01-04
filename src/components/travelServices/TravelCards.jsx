import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane } from 'react-icons/fa';

const travelServices = [
  { name: 'Cruise Tours', image: '/cruise.avif', route: '/cruise-tours' },
  { name: 'Adventure Travel Packages', image: '/adventure.avif', route: '/adventure-travel' },
  { name: 'Family Vacations', image: '/family.jpeg', route: '/family-vacations' },
  { name: 'Nature and Eco-Tourism Trips', image: '/nature.webp', route: '/eco-tourism' },
  { name: 'Luxury Travel Experiences', image: '/laxuery.jpg', route: '/luxury-travel' },
];

const Card = ({ name, image, route }) => {
  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative w-[300px] h-64 rounded-xl shadow-lg bg-red-600 overflow-hidden group mx-4"
  >
    {/* Background Image */}
    <div className="relative h-full">
      <img src={image} alt={name} className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        {/* Card Title */}
        

        {/* Flight Icon Animation */}
        <motion.div
          className="flex items-center bg-white/10 backdrop-blur-lg w-[200px] px-4 py-3 rounded-md"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <FaPlane className="text-white text-5xl" />
          <div className="ml-2 h-1 w-24 bg-gradient-to-r from-gray-500 to-transparent rounded-full" />
        </motion.div>
        <h3 className="text-white text-xl flex flex-wrap font-bold mt-10">{name}</h3>
      </div>
    </div>
  </motion.div>
);
};
const TravelCards = () => {
  return (
    <div className="flex gap-6 overflow-x-auto p-4 justify-center scrollbar-hide">
      {travelServices.map((service, index) => (
        <a href={service.route} key={index}>
          <Card name={service.name} image={service.image} route={service.route} />
        </a>
      ))}
    </div>
  );
};

export default TravelCards;

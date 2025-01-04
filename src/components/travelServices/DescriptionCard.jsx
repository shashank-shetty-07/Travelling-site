import React from "react";
import { FaStar } from "react-icons/fa";

const travelServices = [
  {
    title: "Cruise Tours",
    description:
      "Experience the luxury of the open sea with all-inclusive cruise packages designed for relaxation and adventure.",
    points: [
      "Multiple destinations in one trip",
      "Onboard luxury amenities",
      "Family-friendly activities",
      "Stunning ocean views",
    ],
    rating: 5,
    image: "/cruise.avif", // Add image URL here
  },
  {
    title: "Adventure Travel Packages",
    description:
      "Explore the thrill of adventure with packages tailored for adrenaline junkies. Perfect for hiking, skydiving, and water sports.",
    points: [
      "Guided treks and expeditions",
      "Extreme sports options",
      "Safety-first approach",
      "Suitable for solo travelers",
    ],
    rating: 4,
    image: "/adventure.avif", // Add image URL here
  },
  {
    title: "Family Vacations",
    description:
      "Create lasting memories with packages designed to cater to all age groups, ensuring everyone in the family has fun.",
    points: [
      "Kid-friendly destinations",
      "Family discounts",
      "Stress-free itineraries",
      "Activities for all ages",
    ],
    rating: 5,
    image: "/family.jpeg", // Add image URL here
  },
  {
    title: "Nature and Eco-Tourism Trips",
    description:
      "Reconnect with nature while supporting sustainable tourism. Explore pristine landscapes and learn about local ecosystems.",
    points: [
      "Eco-friendly accommodations",
      "Guided nature trails",
      "Local cultural experiences",
      "Wildlife conservation",
    ],
    rating: 4,
    image: "/nature.webp", // Add image URL here
  },
  {
    title: "Luxury Travel Experiences",
    description:
      "Indulge in the finest travel experiences, from five-star accommodations to personalized services tailored to your preferences.",
    points: [
      "Premium hotels and resorts",
      "Personalized itineraries",
      "Exclusive dining options",
      "VIP transport services",
    ],
    rating: 5,
    image: "/laxuery.jpg", // Add image URL here
  },
];

const DescriptionCard = () => {
  return (
    <div className="p-4 w-full h-auto px-5">
      {travelServices.map((service, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          } items-center mb-8 justify-center rounded-xl `}
        >
          {/* Image */}
          <img
            src={service.image}
            alt={service.title}
            className="w-[600px] h-[400px] rounded-xl object-cover hover:shadow-xl transition"
          />
          <div className="p-6 w-1/2 text-2xl">
            {/* Title */}
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            {/* Star Rating */}
            <div className="flex mb-2">
              {Array(service.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
            </div>
            {/* Description */}
            <p className="text-gray-600 mb-4">{service.description}</p>
            {/* Points */}
            <ul className="text-sm text-gray-600">
              {service.points.map((point, i) => (
                <li key={i} className="mb-1">• {point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DescriptionCard;

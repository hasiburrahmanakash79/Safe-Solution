import { useEffect, useState } from "react";
import {
  FaTools,
  FaHardHat,
  FaTruckMoving,
  FaDraftingCompass,
  FaPaintRoller,
  FaWrench,
  FaCity,
} from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";

const imagesData = [
  {
    id: 1,
    url: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg",
  },
  {
    id: 2,
    url: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-2.jpg",
  },
  {
    id: 3,
    url: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-3.jpg",
  },
  {
    id: 4,
    url: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-4.jpg",
  },
  {
    id: 5,
    url: "https://castro.jamstacktemplates.dev/assets/img/service/service-details-5.jpg",
  },
];

const ServiceDetails = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % imagesData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + imagesData.length) % imagesData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      <SectionTitle title="Service Details" />
      <div className="grid grid-cols-3 gap-5 py-7 max-w-7xl mx-auto">
        <div className="col-span-1">
          <div className="bg-base-200 p-5 ">
            <h1 className="text-lg font-bold pb-5">Services</h1>
            <ul className="space-y-3">
              <li className="border-b border-gray-200 p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                <FaHardHat /> General Construction
              </li>
              <li className="border-b border-gray-200 p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                <FaTools /> Equipment Installation
              </li>
              <li className="border-b border-gray-200 p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                <FaTruckMoving /> Material Transport
              </li>
              <li className="border-b border-gray-200 p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                <FaDraftingCompass /> Architectural Design
              </li>
              <li className="border-b border-gray-200 p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                <FaPaintRoller /> Painting & Finishing
              </li>
              <li className="border-b border-gray-200 p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                <FaWrench /> Plumbing Services
              </li>
              <li className="p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                <FaCity /> Urban Development
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <div className="space-y-5">
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden group">
              {/* Image */}
              <img
                src={imagesData[current].url}
                alt={`Slide ${current + 1}`}
                className="w-full h-[400px] object-cover transition duration-700 ease-in-out"
              />

              {/* Left Button (hidden by default, visible on hover) */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-green-600 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <FaChevronLeft />
              </button>

              {/* Right Button */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-green-600 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <FaChevronRight />
              </button>
            </div>

            <h1 className="text-5xl font-bold">Construction</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
              sunt perspiciatis error id ipsa atque unde quis dolore nobis eum
              aperiam enim blanditiis pariatur inventore eius commodi
              consectetur ut. Totam, assumenda! Laboriosam possimus, corporis
              dicta!
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores aliquid quod, officiis unde nostrum itaque! Adipisci
              dolorum, ab dolor, exercitationem praesentium dolorem quo
              voluptatum itaque dignissimos, sit esse cupiditate. Doloremque
              rerum similique a nobis placeat in illum, quo quaerat, ut
              repellat, fuga itaque? Nihil mollitia nisi, nam, accusantium nemo
              consequuntur reiciendis autem dicta consequatur earum beatae dolor
              distinctio, debitis repudiandae?
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <h1 className="text-xl font-bold">Lorem, ipsum dolor.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore exercitationem omnis cum veritatis sit ducimus
                  mollitia sunt possimus facere nulla.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold">Lorem, ipsum dolor.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore exercitationem omnis cum veritatis sit ducimus
                  mollitia sunt possimus facere nulla.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold">Lorem, ipsum dolor.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore exercitationem omnis cum veritatis sit ducimus
                  mollitia sunt possimus facere nulla.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold">Lorem, ipsum dolor.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore exercitationem omnis cum veritatis sit ducimus
                  mollitia sunt possimus facere nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
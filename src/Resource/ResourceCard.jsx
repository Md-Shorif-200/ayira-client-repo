import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";

const card_details = [
  {
    id: 1,
    title: "Online Lookbook",
    description: "Browse our online lookbook for the current collection.",
    image: "https://i.ibb.co/v4LGzzYh/online-lookbook.webp",
    button: <FaEye />,
    buttonCnt: "view",
  },
  {
    id: 2,
    title: "Colour Card",
    description: "Download our latest colour card to see all available shades.",
    image: "https://i.ibb.co/7t2r8Jp4/colour-card.webp",
    button: <MdDownload />,
    buttonCnt: "download",
  },
  {
    id: 3,
    title: "Printing & Embroidery",
    description: "View our options for custom printing and embroidery.",
    image: "https://i.ibb.co/W4x92LqD/printing-embroidery-options.jpg",
    button: <FaEye />,
    buttonCnt: "view",
  },
  {
    id: 4,
    title: "Coat Hangers",
    description: "Request high-quality coat hangers for your store.",
    image: "https://i.ibb.co/sv5WZKkJ/coat-hangers.jpg",
    button: <RiMenu2Fill />,
    buttonCnt: "request",
  },
  {
    id: 5,
    title: "Size Charts",
    description: "View our detailed size charts to find the perfect fit.",
    image: "https://i.ibb.co/Df0TcVJ0/size-charts.webp",
    button: <FaEye />,
    buttonCnt: "view",
  },
  {
    id: 6,
    title: "Product Sheets",
    description: "Download detailed product sheets for our entire range.",
    image: "https://i.ibb.co/Q2wB13W/product-sheets.webp",
    button: <MdDownload />,
    buttonCnt: "download",
  },
];

const ResourceCard = () => {
  return (
    <div className="bg-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {card_details.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-100 overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-52  rounded-md"
            />
            <div className="py-3 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">{card.description}</p>
              <button className="mt-auto mx-auto bg-[#eae8e1] hover:bg-[#dcd9d1] text-gray-800 font-medium py-2 px-6 rounded-md inline-flex items-center gap-2 transition-colors">
                {card.button}
                <span className="capitalize">{card.buttonCnt}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceCard;

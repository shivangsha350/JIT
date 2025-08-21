import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import back from "./img_asset/back-button.jpg";
import surveyingLab from "./img_asset/Civilimg.jpg";
import materialTestingLab from "./img_asset/CE (5).jpg";
import environmentalLab from "./img_asset/CE (6).jpg";
import cadLab from "./img_asset/cse2.jpeg";

// Sample lab data
const civilLabs = [
  {
    name: "Surveying Lab",
    image: surveyingLab,
    description: "Learn practical surveying techniques with advanced instruments.",
    link: "/survey",
  },
  {
    name: "Material Testing Lab",
    image: materialTestingLab,
    description: "Test the strength & durability of construction materials.",
    link: "/material",
  },
  {
    name: "Environmental Lab",
    image: environmentalLab,
    description: "Explore water & air quality analysis in this eco-focused lab.",
    link: "/environmental",
  },
  {
    name: "CAD Lab",
    image: cadLab,
    description: "Master AutoCAD and design software for civil structures.",
    link: "/cad",
  },
];

const Civil = () => {
  return (
    <>
      <div className="mt-30 px-6 md:px-20 py-10 bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen">
        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-purple-200">
          {/* Back Button */}
          <Link to="/#departments" className="mb-6 inline-block">
            <img
              src={back}
              alt="Go Back"
              className="w-10 h-10 hover:scale-105 transition-transform cursor-pointer"
            />
          </Link>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3c254a] mb-6 text-center">
            Diploma in Civil Engineering
          </h1>

          {/* Overview */}
          <div className="text-center max-w-7xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Build the world around you with our Diploma in Civil Engineering,
              one of the oldest and most respected branches of engineering.
              This 3-year program equips students with knowledge of construction,
              structural design, surveying, environmental engineering, and project management.
            </p>
          </div>

          {/* Key Learning Areas */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Key Learning Areas:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Building Materials & Construction",
                "Surveying and Leveling",
                "RCC and Steel Structures",
                "Environmental & Water Resource Engineering",
                "CAD in Civil Engineering",
                "Site Management & Estimation",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white hover:bg-[#3c254a] transition duration-400 p-4 rounded-md shadow-sm border border-gray-200 flex items-center justify-center text-center select-none"
                >
                  <p className="text-gray-700 group-hover:text-[#fff]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose This Course */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6 pt-4">
            Why Choose This Course?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: "🏠",
                text: "High demand in infrastructure development",
              },
              {
                icon: "🔬",
                text: "Field-oriented curriculum with hands-on labs",
              },
              {
                icon: "💼",
                text: "Internship & site visit opportunities with real-world projects",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center p-4 bg-gray-50 rounded-md hover:bg-[#3c254a] transition duration-400"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-gray-700 group-hover:text-[#fff]">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Career Opportunities */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6 pt-10">
            Career Opportunities:
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Site Supervisor / Junior Engineer",
              "CAD Technician",
              "Quantity Surveyor",
              "Govt. Contractor Assistant Roles",
              "Construction Project Assistant (private/public sector)",
            ].map((role, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200 hover:bg-[#3c254a] hover:text-white transition duration-300"
              >
                <span className="text-xl">🎯</span>
                <span>{role}</span>
              </li>
            ))}
          </ul>

          {/* 🌟 Lab Section */}
          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 text-center">
            Explore Civil Engineering Labs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {civilLabs.map((lab, index) => (
              <div
                key={index}
                className="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={lab.image}
                  alt={lab.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {lab.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{lab.description}</p>
                  <Link
                    to={lab.link}
                    className="inline-block mt-auto text-purple-600 hover:underline font-medium"
                  >
                    View Lab →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Civil;
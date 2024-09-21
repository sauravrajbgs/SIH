'use client'
import React, { useState } from "react";

const Spotlight = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const spotlightData = {
    all: [
      {
        title: "India Post to release stamps on Ramayana,  Mahabharata: Ravi Shankar Prasad",
        image: "/spotlight/Ramayna.svg",
        description: "Government will release stamps on Ramayana, Mahabharata, besides honoring freedom fighters.",
        source: "Powered by StamPick",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      }
    ],
    news: [
      {
        title: "India Post to release stamps on Ramayana,  Mahabharata: Ravi Shankar Prasad",
        image: "/spotlight/Ramayna.svg",
        description: "Government will release stamps on Ramayana, Mahabharata, besides honoring freedom fighters.",
        source: "Powered by StamPick",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      }
    ],
    interviews: [
      {
        title: "India Post to release stamps on Ramayana,  Mahabharata: Ravi Shankar Prasad",
        image: "/spotlight/Ramayna.svg",
        description: "Government will release stamps on Ramayana, Mahabharata, besides honoring freedom fighters.",
        source: "Powered by StamPick",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      }
    ],
    insights: [
      {
        title: "India Post to release stamps on Ramayana,  Mahabharata: Ravi Shankar Prasad",
        image: "/spotlight/Ramayna.svg",
        description: "Government will release stamps on Ramayana, Mahabharata, besides honoring freedom fighters.",
        source: "Powered by StamPick",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      },
      {
        title: "Britain's Royal Mail celebrates 65 years of Paddington",
        image: "/spotlight/other.svg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link: "https://google.com"
      }
    ]
  };
  

  const tabs = ["all", "news", "interviews", "insights"];

  return (
    <div className="bg-[#2B241D] text-white px-10 py-7 rounded-3xl my-10 w-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Spotlight</h2>

     <div className="flex w-full justify-between border-b pb-2 border-b-white border-opacity-10 mb-8 ">
      <nav className=" flex space-x-4">
  {tabs.map((tab) => (
    <button
      key={tab}
      className={`text-sm capitalize transition-all duration-300 hover: ${
        selectedTab === tab
          ? " border-b-2 pb-2 border-white text-white"
          : "text-gray-400 pb-2 hover:text-white"
      }`}
      onClick={() => setSelectedTab(tab)}
    >
      {tab}
    </button>
  ))}
</nav>
<div className="font-semibold cursor-pointer text-gray-300 transition hover:text-white">View all Posts     ➜</div>
</div>

      {/* Content */}
      <div className="flex space-x-16 w-full justify-between">
        
        <div className="w-[50%] flex flex-col space-y-3">
          <img
            className="w-full h- object-cover rounded-lg mb-4"
            src={spotlightData[selectedTab][0].image}
            alt={spotlightData[selectedTab][0].title}
          />
          <div className="text-[#783A73] text-xs font-semibold">POWERED BY STAMPICK</div>
          <a href={spotlightData[selectedTab][0].link}><h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
            {spotlightData[selectedTab][0].title}
          </h3></a>
          <p className="text-gray-400 mb-4">
            {spotlightData[selectedTab][0].description}
          </p>
          
        </div>
        <div className="flex flex-col ">
          {spotlightData[selectedTab].slice(1).map((item, index) => (
            <div
              key={index}
              className=" py-4 flex space-x-4 items-center border-b border-white border-opacity-15"
            >
              <div className="flex flex-col space-y-2 w-3/5">
                <div className="text-[#786B3A] text-sm">SPOTLIGHT</div>
                <a href={item.link} target="blank"><h4 className="text-xl font-bold underline">{item.title}</h4></a>
                
              </div>
              <img
                className=" object-contain rounded-lg w-2/5"
                src={item.image}
                alt={item.title}
              />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spotlight;

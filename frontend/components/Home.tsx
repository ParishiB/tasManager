import React from "react";

import homeimg1 from "../public/homeimg1.svg";
import homeimg2 from "../public/homeimg2.svg";
import homeimg3 from "../public/homeimg3.svg";

const data = [
  {
    id: 1,
    img: "/homeimg1.svg",
    heading: "Introducing Tags",
    para: "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
  },
  {
    id: 2,
    img: "/homeimg2.svg",
    heading: "Share Notes Instantly",
    para: "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
  },
  {
    id: 3,
    img: "/homeimg3.svg",
    heading: "Access Anywhere",
    para: "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
  },
];

const Home = () => {
  return (
    <>
      <div className="">
        <h1 className="font-bold text-4xl m-2 mt-10">Good Morning Joe</h1>
        <div className="flex">
          {data.map((item) => (
            <div key={item.id} className="flex p-7 border m-2">
              <img src={item.img} alt={item.heading} />
              <div className="mt-2">
                <h1 className="text-sm font-bold">{item.heading}</h1>
                <p className="text-xs font-extralight">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

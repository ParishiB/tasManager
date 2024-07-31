import { CiCalendar } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

const data = [
  {
    id: 1,
    txt: "In progress",
    icon: <CiCalendar />,
  },
  {
    id: 2,
    txt: "Automation",
    icon: <BsStars />,
  },
  {
    id: 3,
    txt: "Filter",
    icon: <CiFilter />,
  },
  {
    id: 4,
    txt: "Share",
    icon: <IoShareSocialOutline />,
  },
];

const Menubar = () => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="search"
        className="p-3 h-[20px] mt-3 rounded-lg"
      />
      <div className="flex items-center gap-20">
        {data.map((item) => (
          <div key={item.id} className="flex items-center rounded-xl p-2 m-2 ">
            <div className="text-xs font-semibold">{item.txt}</div>
            <div className="text-xs">{item.icon}</div>
          </div>
        ))}
        <button className="text-white bg-[#4c38c2] p-2 rounded-lg text-xs ">
          Create new +
        </button>
      </div>
    </div>
  );
};

export default Menubar;

"use client";
// import { CiHome } from "react-icons/ci";
// import { IoSettingsOutline } from "react-icons/io5";
// import { SlPeople } from "react-icons/sl";
// import { CiViewBoard } from "react-icons/ci";
// import { GiChart } from "react-icons/gi";
// import { CiBellOn } from "react-icons/ci";
// import { RiLoader2Line } from "react-icons/ri";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { TfiDownload } from "react-icons/tfi";
// import { CiCirclePlus } from "react-icons/ci";
// import { PiWarningDiamondLight } from "react-icons/pi";
// import { CiCalendar } from "react-icons/ci";
// import { GoPencil } from "react-icons/go";
// import { RxCross2 } from "react-icons/rx";
// import { BsArrowsAngleExpand } from "react-icons/bs";
// import { CiShare2 } from "react-icons/ci";
// import { FaRegStar } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import { LiaDownloadSolid } from "react-icons/lia";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
//   Checkbox,
//   Input,
//   Link,
// } from "@nextui-org/react";
// import TaskModal from "./TaskModal";

// const data = [
//   {
//     id: 1,
//     txt: "Home",
//     icon: <CiHome />,
//   },
//   {
//     id: 2,
//     txt: "Boards",
//     icon: <CiViewBoard />,
//   },
//   {
//     id: 3,
//     txt: "Settings",
//     icon: <IoSettingsOutline />,
//   },
//   {
//     id: 4,
//     txt: "Teams",
//     icon: <SlPeople />,
//   },
//   {
//     id: 5,
//     txt: "Analytics",
//     icon: <GiChart />,
//   },
// ];

// const data2 = [
//   { id: 1, icon: <RiLoader2Line />, txt: "Status" },
//   { id: 2, icon: <PiWarningDiamondLight />, txt: "Priority" },
//   { id: 3, icon: <CiCalendar />, txt: "Deadline" },
//   { id: 4, icon: <GoPencil />, txt: "Description" },
// ];

// export default function Sidebar() {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const router = useRouter();
//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     router.push("/login");
//   };
//   return (
//     <>
//       <div className="flex flex-col  bg-slate-100 w-[250px] pr-5">
//         <div className="flex flex-col h-screen justify-between ml-5 mt-5">
//           <div>
//             <div className="flex justify-between ml-2">
//               <div className="flex">
//                 <CiBellOn />
//                 <RiLoader2Line />
//                 <MdKeyboardDoubleArrowRight />
//               </div>
//               <div className="bg-gray-200 p-1 rounded-lg">
//                 <button className="text-xs" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </div>
//             </div>
//             <div className="text-sm">
//               {data.map((item) => (
//                 <div key={item.id} className="flex items-center space-x-4 p-2 ">
//                   {item.icon}
//                   <span>{item.txt}</span>
//                 </div>
//               ))}
//             </div>
//             <Button
//               onPress={onOpen}
//               className="bg-[#4c38c2] text-white p-3 rounded-xl text-xs m-2"
//             >
//               + Create Task
//             </Button>
//             <TaskModal isOpen={isOpen} onOpenChange={onOpenChange} />
//           </div>
//         </div>
//         <div className="flex p-2 bg-gray-100">
//           <div className="text-gray-400 p-2">
//             <LiaDownloadSolid />
//           </div>
//           <div className="text-gray-400">
//             <p className="text-sm">Download the app</p>
//             <p className="text-xs">Get the full experience</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// import { CiHome } from "react-icons/ci";
// import { IoSettingsOutline } from "react-icons/io5";
// import { SlPeople } from "react-icons/sl";
// import { CiViewBoard } from "react-icons/ci";
// import { GiChart } from "react-icons/gi";
// import { CiBellOn } from "react-icons/ci";
// import { RiLoader2Line } from "react-icons/ri";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { TfiDownload } from "react-icons/tfi";
// import { CiCirclePlus } from "react-icons/ci";
// import { PiWarningDiamondLight } from "react-icons/pi";
// import { CiCalendar } from "react-icons/ci";
// import { GoPencil } from "react-icons/go";
// import { RxCross2 } from "react-icons/rx";
// import { BsArrowsAngleExpand } from "react-icons/bs";
// import { CiShare2 } from "react-icons/ci";
// import { FaRegStar } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import { LiaDownloadSolid } from "react-icons/lia";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
//   Checkbox,
//   Input,
//   Link,
// } from "@nextui-org/react";
// import TaskModal from "./TaskModal";
// import { useState } from "react";

// const data = [
//   { id: 1, txt: "Home", icon: <CiHome /> },
//   { id: 2, txt: "Boards", icon: <CiViewBoard /> },
//   { id: 3, txt: "Settings", icon: <IoSettingsOutline /> },
//   { id: 4, txt: "Teams", icon: <SlPeople /> },
//   { id: 5, txt: "Analytics", icon: <GiChart /> },
// ];

// const data2 = [
//   { id: 1, icon: <RiLoader2Line />, txt: "Status" },
//   { id: 2, icon: <PiWarningDiamondLight />, txt: "Priority" },
//   { id: 3, icon: <CiCalendar />, txt: "Deadline" },
//   { id: 4, icon: <GoPencil />, txt: "Description" },
// ];

// export default function Sidebar() {
//  const [openM , setOpemM] = useState(false)
//   const router = useRouter();

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     router.push("/login");
//   };

//   const openModal () => {
//     setOpemM(!openM)
//     if(openM){
//       <TaskModal/>
//     }

//   }

//   return (
//     <>
//       <div className="flex flex-col bg-slate-100 w-[250px] pr-5">
//         <div className="flex flex-col h-screen justify-between ml-5 mt-5">
//           <div>
//             <div className="flex justify-between ml-2">
//               <div className="flex">
//                 <CiBellOn />
//                 <RiLoader2Line />
//                 <MdKeyboardDoubleArrowRight />
//               </div>
//               <div className="bg-gray-200 p-1 rounded-lg">
//                 <button className="text-xs" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </div>
//             </div>
//             <div className="text-sm">
//               {data.map((item) => (
//                 <div key={item.id} className="flex items-center space-x-4 p-2 ">
//                   {item.icon}
//                   <span>{item.txt}</span>
//                 </div>
//               ))}
//             </div>

//             <button onClick={openModal} color="primary">
//               Open Modal
//             </button>
//           </div>
//         </div>
//         <div className="flex p-2 bg-gray-100">
//           <div className="text-gray-400 p-2">
//             <LiaDownloadSolid />
//           </div>
//           <div className="text-gray-400">
//             <p className="text-sm">Download the app</p>
//             <p className="text-xs">Get the full experience</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { CiHome } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { CiViewBoard } from "react-icons/ci";
import { GiChart } from "react-icons/gi";
import { CiBellOn } from "react-icons/ci";
import { RiLoader2Line } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TfiDownload } from "react-icons/tfi";
import { CiCirclePlus } from "react-icons/ci";
import { PiWarningDiamondLight } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { LiaDownloadSolid } from "react-icons/lia";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import TaskModal from "./TaskModal";
import { useState } from "react";

const data = [
  { id: 1, txt: "Home", icon: <CiHome /> },
  { id: 2, txt: "Boards", icon: <CiViewBoard /> },
  { id: 3, txt: "Settings", icon: <IoSettingsOutline /> },
  { id: 4, txt: "Teams", icon: <SlPeople /> },
  { id: 5, txt: "Analytics", icon: <GiChart /> },
];

const data2 = [
  { id: 1, icon: <RiLoader2Line />, txt: "Status" },
  { id: 2, icon: <PiWarningDiamondLight />, txt: "Priority" },
  { id: 3, icon: <CiCalendar />, txt: "Deadline" },
  { id: 4, icon: <GoPencil />, txt: "Description" },
];

export default function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col bg-slate-100 w-[250px] pr-5">
        <div className="flex flex-col h-screen justify-between ml-5 mt-5">
          <div>
            <div className="flex justify-between ml-2">
              <div className="flex">
                <CiBellOn />
                <RiLoader2Line />
                <MdKeyboardDoubleArrowRight />
              </div>
              <div className="bg-gray-200 p-1 rounded-lg">
                <button className="text-xs" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
            <div className="text-sm">
              {data.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-2 ">
                  {item.icon}
                  <span>{item.txt}</span>
                </div>
              ))}
            </div>

            <button
              onClick={openModal}
              className="bg-[#4c38c2] text-white p-3 rounded-xl text-xs m-2"
            >
              + Create Task
            </button>

            {/* Conditionally render TaskModal */}
            {isModalOpen && (
              <TaskModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
            )}
          </div>
        </div>
        <div className="flex p-2 bg-gray-100">
          <div className="text-gray-400 p-2">
            <LiaDownloadSolid />
          </div>
          <div className="text-gray-400">
            <p className="text-sm">Download the app</p>
            <p className="text-xs">Get the full experience</p>
          </div>
        </div>
      </div>
    </>
  );
}

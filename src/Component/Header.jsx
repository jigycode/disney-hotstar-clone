import { useState } from "react";
import logo2 from "../assets/logo2.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlus,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
// Importing icons from react-icons
import { HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import profille from "../assets/profille.png";
// import HiDotsVertical from "react-icons/hi";

export function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: <HiHome />,
    },
    {
      name: "SEARCH",
      icon: <HiMagnifyingGlass />,
    },
    {
      name: "WATCH LIST",
      icon: <HiPlus />,
    },
    {
      name: "ORIGINALS",
      icon: <HiStar />,
    },
    {
      name: "MOVIES",
      icon: <HiPlayCircle />,
    },
    {
      name: "SERIES",
      icon: <HiTv />,
    },
  ];
  return (
    <>
      {" "}
      <div className="flex  items-center justify-between p-5 w-auto bg-blue-950 ">
        <div className="flex gap-6 items-center  ">
          <img src={logo2} className="w-[75px] md:w-[115px] p-6 object-cover" />
          <div className="hidden md:flex  gap-8">
            {menu.map((item, index) => (
              <HeaderItem key={index} name={item.name} Icon={item.icon} />
            ))}
          </div>
          <div className="flex md:hidden gap-8 bg-blue-950 sm:w-full">
            {menu.map(
              (item, index) =>
                index < 3 && (
                  <HeaderItem key={index} name={item.name} Icon={item.icon} />
                )
            )}
            <div className="flex md:hidden" onClick={() => setToggle(!toggle)}>
              <HeaderItem name={""} Icon={HiDotsVertical} />
              {toggle ? (
                <div
                  className="absolute mt-3 bg-[#f5f4f4] 
            border-[1px] border-gray-700 p-3 px-5 py-4"
                >
                  {menu.map(
                    (item, index) =>
                      index > 2 && (
                        <HeaderItem
                          key={index}
                          name={item.name}
                          Icon={item.icon}
                        />
                      )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <img src={profille} className="w-[50px] mr-6" />
      </div>
    </>
  );
}
export default Header;

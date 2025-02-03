import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router";

export default function MobileDrawer({ data }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IoIosMenu onClick={handleOpen} size={30} />
      <div
        onClick={handleOpen}
        className={`fixed top-0 w-full right-0 h-screen backdrop-brightness-50 blur-sm z-40 transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      ></div>
      <div
        className={`fixed top-0 ${
          open ? "right-0" : "-right-full"
        } w-80 h-screen z-50 bg-white p-10 space-y-10 transition-all duration-300`}
      >
        <div onClick={handleOpen} className="w-fit">
          <IoCloseOutline size={25} />
        </div>
        <ul className="space-y-3">
          {data.map((item, idx) => (
            <li key={idx}>
              <NavLink
                className="text-primary/80 hover:text-secondary transition-all duration-300"
                to={item.href}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

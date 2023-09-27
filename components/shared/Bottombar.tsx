import { sidebarLinks } from "@/constants/constants";
import React from "react";
import NavLink from "../ui/NavLink";
import Image from "next/image";

const Bottombar = () => {
  return (
    <footer className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => (
          <NavLink className="bottombar_link" linkRoute={link.route} key={link.label}>
            <Image src={link.imgURL} alt={link.label} width={20} height={20} />
            <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(" ")[0]}</p>
          </NavLink>
        ))}
      </div>
    </footer>
  );
};

export default Bottombar;

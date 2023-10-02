import { sidebarLinks } from "@/constants/constants";
import { SignedIn, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import NavLink from "../ui/NavLink";
import SignOutBtn from "../ui/SignOutBtn";

const LeftSidebar = async () => {
  const user = await currentUser();

  let allLinks = user ? sidebarLinks : sidebarLinks.filter((link)=>link.label !== "Profile");

  return (
    <aside className="custom-scrollbar leftsidebar">
      <div className="flex flex-1 w-full px-6 gap-6 flex-col">
        {allLinks.map((link) => {
          return (
            <NavLink
              className="leftsidebar_link"
              linkRoute={link.route}
              key={link.label}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
              />
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </NavLink>
          );
        })}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutBtn />
        </SignedIn>
      </div>
    </aside>
  );
};

export default LeftSidebar;

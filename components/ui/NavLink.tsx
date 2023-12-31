"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavLink = ({
  children,
  linkRoute,
  className
}: {
  children: ReactNode;
  linkRoute: string;
  className?: string;
}) => {

  const pathname = usePathname();
  const { userId } = useAuth();

  if (linkRoute === "/profile") linkRoute = `${linkRoute}/${userId}`;

  const isActive: boolean =
    pathname === linkRoute ||
    (pathname.includes(linkRoute) && linkRoute.length > 1);

  return (
    <Link
      href={linkRoute}
      className={`${isActive && "bg-primary-500"} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

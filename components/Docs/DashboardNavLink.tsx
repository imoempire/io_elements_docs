"use client";

import React from "react";
import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: any;
}

const DashboardNavLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  const active = href === pathname;
  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block text-sm ${
        active ? "text-black font-semibold" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};

export default DashboardNavLink;

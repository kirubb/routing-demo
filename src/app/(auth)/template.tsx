"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {useState} from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {



  const pathname = usePathname();

  const [input,setInput]= useState("");

  return (
    <div>
      <div>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)} }/>
      </div>

      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            key={link.name}
            href={link.href}
            className={isActive ? "font-bold mr-4" : "mr-4 text-blue-500"}
          >
            {link.name}
          </Link>
        );
      })}
      {"   "}
      {children}
    </div>
  );
};

export default AuthLayout;

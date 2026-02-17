"use client"

import Link from 'next/link'
import { usePathname } from "next/navigation";
import { useState } from 'react';
import "./styles.modules.css"

const navLinks = [
    {name: "Login", href: "/login"},
    {name: "Register", href: "/register"},
    {name: "Forgot Password", href: "/forget-password"},
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname() 
    const [input , setInput] = useState("")
    console.log("current path is ", pathname)
    return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");

        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );

}
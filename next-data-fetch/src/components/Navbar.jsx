"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();

  // Hide navbar in dashboard
  if (pathName.includes("dashboard")) {
    return null;
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/services">Services</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/count">Count</Link>
        </li>
        <li>
          <Link href="/design">Design</Link>
        </li>
      </ul>
    </nav>
  );
}
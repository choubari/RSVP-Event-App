"use client";
import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-blue-300 flex items-center justify-between px-8 sm:px-32 py-5 mb-10">
      <Logo />
      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-10 text-xl font-medium">
        <li className="hover:underline hover:text-blue-600">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline hover:text-blue-600">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:underline hover:text-blue-600">
          <Link href="/categories">Categories</Link>
        </li>
        <li className="hover:underline hover:text-blue-600">
          <Link href="/events">Events</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {/* Hamburger Icon */}
        <svg
          className="w-8 h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full sm:hidden">
          <ul className="flex flex-col gap-2 p-4 bg-blue-300">
            <li className="hover:underline hover:text-blue-600">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline hover:text-blue-600">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline hover:text-blue-600">
              <Link href="/categories">Categories</Link>
            </li>
            <li className="hover:underline hover:text-blue-600">
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

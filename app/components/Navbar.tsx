"use client";
import Link from "next/link";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="hover:text-blue-400 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

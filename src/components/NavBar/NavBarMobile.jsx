import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
const NavBarMobile = ({ setIsOpen }) => {
  const NavbarMenu = [
    { id: 1, title: "ACCUEIL", link: "/" },
    { id: 2, title: "A PROPOS", link: "#propos" },
    { id: 3, title: "CUISINES", link: "#cuisines" },
    { id: 4, title: "SERVICES", link: "#services" },
    { id: 5, title: "CONTACT", link: "#contact" },
  ];
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 12 }}
      exit={{ y: -100, opacity: 0 }}
      className="md:hidden absolute top-25 left-0 w-full bg-secondary/15 text-white rounded-2xl shadow-lg"
    >
      <ul className="flex flex-col font-bold text-gray-800 items-center space-y-4 py-4">
        {NavbarMenu.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              className=" uppercase hover:text-black transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          </li>
        ))}
        <button>
          <FaShoppingCart className="text-3xl hover:bg-primary hover:text-white rounded-full p-2" />
        </button>
      </ul>
    </motion.div>
  );
};

export default NavBarMobile;

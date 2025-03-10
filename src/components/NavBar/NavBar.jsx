import { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import NavBarMobile from "./NavBarMobile";
import { motion } from "framer-motion";
import { useCart } from "../../components/Context/CartContext";
import { AnimatePresence } from "framer-motion";
import CARlogo from "../../assets/FoodPhotos/carLogo.png";

const NavBar = ({ setModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const NavbarMenu = [
    { id: 1, title: "ACCUEIL", link: "/" },
    { id: 2, title: "A PROPOS", link: "#propos" },
    { id: 3, title: "CUISINES", link: "#cuisines" },
    { id: 4, title: "SERVICES", link: "#services" },
    { id: 5, title: "CONTACT", link: "#contact" },
  ];

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50 bg-secondary/15">
      <div className="container flex justify-between items-center h-20 px-4">
        {/* Logo */}
        <div className="flex">
          <motion.img
            initial={{ opacity: 0, y: -100, rotate: 90 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={CARlogo}
            alt="logo"
            className="w-20 h-20 md:w-44 md:h-44 object-contain"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <p className="text-amber-600 text-4xl font-engagement font-light tracking-wider">
              Comme Au Restaurant
            </p>
          </motion.div>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6 items-center">
          {NavbarMenu.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={item.link}
                className="text-secondary uppercase transition duration-300"
              >
                {item.title}
              </a>

              <span className="absolute left-0 bottom-[-4px] w-full h-[3px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          ))}

          {/* Bouton panier */}
          <div className="relative">
            <button onClick={() => setModalOpen(true)} className="relative">
              {" "}
              <FaShoppingCart className="text-secondary text-3xl hover:bg-secondary hover:text-white rounded-full p-2 cursor-pointer" />
            </button>
            {totalItems > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs flex items-center justify-center rounded-full w-5 h-5">
                <p>{totalItems}</p>
              </div>
            )}
          </div>
        </ul>

        {/* Menu burger (mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="text-secondary" />
          ) : (
            <FaBars className="text-secondary" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <NavBarMobile
            setModalOpen={setModalOpen}
            setIsOpen={setIsOpen}
            totalItems={totalItems}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;

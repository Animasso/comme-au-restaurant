import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className=" mt-10 bg-secondary/45 text-white py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center"
      >
        {/* logo */}
        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
          <p className=" font-ayaka">Comme Au Restaurant</p>
        </div>
        {/* social */}
        <div className=" text-3xl flex items-center gap-4 mt-6 text-white">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
        </div>
        {/* copyright */}
        <div className="text-xs text-center">
          &copy; 2025 Comme Au Restaurant. Tous droits réservés.AsidProd
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

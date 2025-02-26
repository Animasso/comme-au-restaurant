import Afrique from "../assets/drapeau/afrique.png";
import Asiatique from "../assets/drapeau/asie.png";
import Indienne from "../assets/drapeau/inde.png";
import Francais from "../assets/drapeau/france.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const SectionPlat = () => {
  const cuisine = [
    { id: 1, name: "Africaine ", image: Afrique, path: "/plats/Africaine" },
    { id: 2, name: "Asiatique", image: Asiatique, path: "/plats/Asiatique" },
    { id: 3, name: "Indienne", image: Indienne, path: "/plats/Indienne" },
    { id: 4, name: "Française", image: Francais, path: "/plats/Française" },
  ];
  const navigate = useNavigate();
  return (
    <section className=" container bg-secondary/30">
      <h2 className=" p-10 font-ayaka text-4xl font-semibold uppercase text-center">
        {" "}
        Nos cuisines
      </h2>
      <div className=" py-7 cursor-pointer  flex flex-wrap items-center  gap-5 justify-center">
        {cuisine.map((item, i) => (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.5 }}
            key={item.id}
            onClick={() => navigate(item.path)}
            className="shadow-2xl bg-white rounded-2xl flex items-center p-3"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-contain"
            />
            <h3 className="text-2xl font-semibold ml-2">{item.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionPlat;

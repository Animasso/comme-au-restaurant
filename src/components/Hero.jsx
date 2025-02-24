import { motion } from "framer-motion";
import Banner from "../assets/FoodPhotos/banner.webp";

const BrandInfo = () => {
  return (
    <section
      id="#propos"
      className="mt-26 bg-secondary/10 overflow-hidden container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 md:py-24 py-14"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center items-center"
      >
        <img
          src={Banner}
          alt="banner"
          className="drop-shadow w-full md:mr-6 max-w-[500px] h-auto object-cover"
        />
      </motion.div>

      {/* texte */}
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-semibold font-ayaka lg:text-4xl uppercase text-3xl mb-2"
          >
            A PROPOS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Chez{" "}
            <span className="font-ayaka text-2xl">**Comme Au Restaurant**</span>
            , nous nous engageons à vous offrir des plats savoureux et
            authentiques, préparés avec des ingrédients de qualité. Découvrez
            une large sélection de mets français, indiens, africains et
            asiatiques, disponibles en portions individuelles ou familiales,
            livrés directement chez vous pour une expérience culinaire inégalée.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Chaque plat est préparé par des chefs spécialisés dans leur cuisine
            respective, garantissant ainsi des saveurs authentiques et un
            savoir-faire traditionnel. Que vous souhaitiez déguster un cassoulet
            français, un curry indien, un mafé africain ou un ramen asiatique,
            nos experts mettent tout leur talent pour vous offrir une expérience
            culinaire unique.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Nous croyons en l’art de la cuisine sur mesure et proposons
            également des services pour vos réceptions et mariages. Que ce soit
            un banquet raffiné ou un buffet convivial, nous préparons des plats
            adaptés à vos envies, avec le souci du détail et le goût de
            l’excellence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Rejoignez-nous dans cette aventure gastronomique et laissez-vous
            séduire par des saveurs venues d’ailleurs, sans bouger de chez vous
            !
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandInfo;

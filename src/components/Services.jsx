import TraiteurF from "../assets/servicesFood/traiteur-francais.jpg";
import TraiteurAfrique from "../assets/servicesFood/afrique-mariage.jpeg";
import TraiteurAsiatique from "../assets/servicesFood/traiteur-asiatique.webp";
import TraiteurI from "../assets/servicesFood/traiteur-indien.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Services = () => {
  return (
    <section id="services" className="container mt-32 bg-secondary/50 p-6">
      <h2 className="title text-center mb-6">Nos Services Extérieurs</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Colonne gauche : Swiper avec les images */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="w-full md:w-1/2"
        >
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper rounded-lg shadow-lg"
          >
            <SwiperSlide>
              <img
                src={TraiteurAfrique}
                alt="Traiteur Africain"
                className="w-full h-auto object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={TraiteurAsiatique}
                alt="Traiteur Asiatique"
                className="w-full h-auto object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={TraiteurF}
                alt="Traiteur Français"
                className="w-full h-auto object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={TraiteurI}
                alt="Traiteur Indien"
                className="w-full h-auto object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* Colonne droite : Texte explicatif */}
        <div className="w-full md:w-1/2 text-left">
          <p>
            Vous organisez un mariage, une grande fête familiale ou encore un
            événement d’entreprise ? Offrez à vos convives une expérience
            culinaire d’exception grâce à notre service traiteur sur mesure !
            <span className="font-ayaka"> Chez Comme Au Restaurant</span>, nous
            mettons notre passion et notre savoir-faire à votre service pour
            créer des menus savoureux et adaptés à toutes vos occasions
            spéciales.
          </p>
          <br />
          <p>
            Nous vous proposons des formules adaptées à votre budget, avec des
            ingrédients frais et de qualité, soigneusement sélectionnés par nos
            chefs. Nos spécialités s’adaptent à vos envies : cuisine
            traditionnelle, mets exotiques ou créations gastronomiques
            sur-mesure.
          </p>
          <br />
          <p>
            Pour garantir un service impeccable, nous demandons une prise de
            contact au moins une semaine à l’avance afin de vous offrir une
            prestation à la hauteur de vos attentes.
          </p>
          <br />
          <p>
            Contactez-nous dès aujourd’hui pour discuter de votre projet et
            recevoir une offre personnalisée. Ensemble, créons des souvenirs
            gourmands et inoubliables !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

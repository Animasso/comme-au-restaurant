import { useParams } from "react-router-dom";
import { DishesByCuisine } from "../utils/data/data";
import { motion } from "framer-motion";
import { useCart } from "../components/Context/CartContext";
import { useState } from "react";
import CartModal from "../components/CartModal";
const ListDishes = () => {
  const { cuisine } = useParams();
  const dishes = DishesByCuisine[cuisine] || [];
  const { addToCart } = useCart();
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <section className="container mx-auto mt-28 p-5">
      <h2 className=" font-ayaka text-4xl font-semibold text-center mb-6 capitalize">
        {cuisine}
      </h2>
      <CartModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.length > 0 ? (
          dishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="shadow-lg rounded-lg overflow-hidden bg-white p-4"
            >
              <div className=" relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-56 object-cover rounded-md mb-3"
                />
                <div className="absolute top-0 right-0 p-2 hover:scale-105 transition  bg-red-600 text-white rounded-xl text-sm">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      addToCart(dish);
                      setModalOpen(true);
                    }}
                  >
                    Commander
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-ayaka tracking-wider font-semibold">
                {dish.name}
              </h3>
              <p className=" font-fuzzy text-gray-600">{dish.description}</p>
              <div className=" flex justify-between">
                <p className="text-gray-900 font-bold mt-2">{dish.price} €</p>
                <p className=" flex justify-center items-center text-red-500 text-sm">
                  {dish.epice > 0 ? `🌶️ Épicé: ${dish.epice}` : "Non épicé"}
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Aucun plat disponible pour cette cuisine.
          </p>
        )}
      </div>
    </section>
  );
};

export default ListDishes;

import { motion } from "framer-motion";
import testimonials from "../utils/data/Testimonials";

const Testimonials = () => {
  return (
    <section className="container mt-20 bg-secondary/40 rounded-2xl  ">
      <h2 className="title">Avis</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((testimonial, i) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: i * 0.4 }}
            key={testimonial.id}
            className=" bg-white drop-shadow-lg p-6 rounded-xl shadow-lg"
          >
            <div className=" flex-center space-x-4 ">
              <img
                src={testimonial.image}
                alt={testimonial.person}
                className="object-cover rounded-full h-14 w-14"
              />
              <p className="font-semibold text-lg font-fuzzy">
                {testimonial.person}
              </p>
            </div>
            <p className="mt-4 text-gray-700 ">{testimonial.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

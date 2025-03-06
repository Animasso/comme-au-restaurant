import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setDataField(data);
    setIsSubmit(true);
  };
  const [dataField, setDataField] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <section className=" mt-24 flex  flex-col justify-center items-center min-h-screen bg-secondary/45 p-6 rounded-3xl">
      <h2 className="text-2xl title font-bold text-center mb-6 text-gray-800">
        Prise de Contact
      </h2>
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
        {!isSubmit ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            {/* Nom */}
            <div>
              <label className="block text-gray-700 font-semibold">Nom</label>
              <input
                {...register("Nom", { required: "Ce champ est requis" })}
                type="text"
                placeholder="Nom"
                className="w-full drop-shadow-2xl px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.Nom && (
                <p className="text-red-500 text-sm">{errors.Nom.message}</p>
              )}
            </div>

            {/* Prénom */}
            <div>
              <label className="block text-gray-700 font-semibold">
                Prénom
              </label>
              <input
                {...register("prenom", { required: "Ce champ est requis" })}
                type="text"
                placeholder="Prénom"
                className="w-full drop-shadow-2xl px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.prenom && (
                <p className="text-red-500 text-sm">{errors.prenom.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                {...register("email", {
                  required: "L'email est requis",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Format d'email invalide",
                  },
                })}
                type="email"
                placeholder="Email"
                className="w-full drop-shadow-2xl px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                {...register("message", { required: "Ce champ est requis" })}
                rows={4}
                placeholder="Votre message..."
                className="w-full drop-shadow-2xl px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Bouton Envoyer */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
          </form>
        ) : (
          <motion.div className=" font-ayaka ">
            <p className=" text-2xl font-semibold ">
              Merci{" "}
              <span className=" text-secondary">
                {dataField.prenom} {dataField.Nom}
              </span>{" "}
            </p>
            <br />
            <p>
              {" "}
              Votre Message a bien eté envoyé la réponse sera envoyé à l'adresse
              mail :{" "}
              <span className=" text-secondary font-semibold">
                {dataField.email}.
              </span>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;

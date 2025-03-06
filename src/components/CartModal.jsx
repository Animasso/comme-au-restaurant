import { useCart } from "./Context/CartContext";
import { FaTrash } from "react-icons/fa";

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();
  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-[500px] transform transition-all duration-300">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          🛒 Votre Panier
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Votre panier est vide.</p>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-2 border border-gray-300">Plat</th>
                  <th className="p-2 border border-gray-300">Quantité</th>
                  <th className="p-2 border border-gray-300">Prix</th>
                  <th className="p-2 border border-gray-300">Action</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="p-2 border border-gray-300">{item.name}</td>
                    <td className="p-2 border border-gray-300">
                      {item.quantity}
                    </td>
                    <td className="p-2 border border-gray-300">
                      {(item.price * item.quantity).toFixed(2)} €
                    </td>
                    <td className="p-2 border border-gray-300">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <FaTrash className="text-red-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Total et Boutons */}
        <p className="text-lg font-semibold mt-4 text-gray-900 text-center">
          Total: {total.toFixed(2)} €
        </p>

        <div className="flex justify-between mt-6">
          <button
            onClick={clearCart}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
          >
            Vider le panier
          </button>
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

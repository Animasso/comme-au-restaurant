import { useCart } from "./Context/CartContext";
import { FaTrash } from "react-icons/fa";

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();
  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-96 transform transition-all duration-300">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          🛒 Votre Panier
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Votre panier est vide.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-2"
              >
                <span className="font-medium text-gray-800">
                  {item.name} x {item.quantity}
                </span>
                <span className="text-gray-700">
                  {item.price * item.quantity} €
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <FaTrash className="text-red-500" />
                </button>
              </li>
            ))}
          </ul>
        )}

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

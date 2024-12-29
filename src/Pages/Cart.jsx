import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../Redux/Slice/States/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    navigate("/checkout");
  };

  if (items.length === 0) {
    return (
      <p className="flex justify-center items-center text-lg font-bold h-[50vh]">
        Your cart is empty!
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center sm:text-left">
        Your Cart
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white rounded shadow-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 px-2 py-1 border rounded"
                  />
                </td>
                <td className="px-4 py-2">${item.totalPrice.toFixed(2)}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
        <div className="mb-4 sm:mb-0">
          <p>Total Items: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
        <button
          onClick={handleCheckout}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full sm:w-auto"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

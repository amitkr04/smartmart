import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToCart, removeFromCart } from "../Redux/Slice/States/cartSlice";
import { UserContext } from "../Context/UserContextProvider";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(UserContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Check if the product is in the cart
  const isInCart = cartItems.some((item) => item.id === parseInt(id));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (isLoggedIn) {
      dispatch(
        addToCart({ id: product.id, name: product.title, price: product.price })
      );
      console.log("Product added to cart:", product);
    } else {
      alert("Please log in to add products to your cart.");
      navigate("/login");
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-xl">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-100">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Go Back
      </button>
      {product && (
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-6 gap-6">
          {/* Left Side: Product Image */}
          <div className="flex-1">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-4 text-slate-700">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-xl font-bold mb-6 text-slate-950">
              ${product.price}
            </p>
            {/* Conditional rendering for Add/Remove button */}
            {isInCart ? (
              <button
                onClick={handleRemoveFromCart}
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

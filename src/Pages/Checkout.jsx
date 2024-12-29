import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center container mx-auto px-4 py-8 h-[50vh]">
      <h1 className="text-2xl font-bold mb-6 text-center sm:text-3xl">
        Thank you for your purchase!
      </h1>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 w-full max-w-xs"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Checkout;

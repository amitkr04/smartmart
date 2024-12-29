import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";

const Home = () => {
  const { searchQuery } = useOutletContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-100">
      {/* Show loading message while data is being fetched */}
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-gray-600 text-xl">Loading products...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-4"
                />

                {/* Product Title */}
                <h2 className="text-lg font-semibold mb-2 text-slate-700 hover:text-slate-950">
                  {product.title}
                </h2>

                {/* Product Price */}
                <p className="text-slate-950 font-bold mb-2">
                  ${product.price}
                </p>

                {/* Product Description */}
                <p className="text-sm text-gray-600">
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + "..."
                    : product.description}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

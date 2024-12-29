import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContextProvider";

const Login = () => {
  const { credentials, handleLoginChange, handleLoginSubmit } =
    useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="h-[60vh] flex items-center justify-center bg-gray-50">
      <div className=" max-w-md   p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
        <form
          onSubmit={(e) => handleLoginSubmit(e, navigate)}
          className="space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleLoginChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleLoginChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";

const Profile = () => {
  const { user, handleRegisterChange, handleUpdateProfile, formData } =
    useContext(UserContext);

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <form onSubmit={handleUpdateProfile}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData?.username || user?.username || ""}
            onChange={handleRegisterChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData?.email || user?.email || ""}
            onChange={handleRegisterChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData?.address || user?.address || ""}
            onChange={handleRegisterChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;

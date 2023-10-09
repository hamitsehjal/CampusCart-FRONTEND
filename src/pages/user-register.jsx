// This is the User-Registration of CampusCart

// This is the User-Registration of CampusCart
import { useState } from "react";

export default function UserRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    studentNumber: "",
    email: "",
    password: "",
    profilePicture: null,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePicture: file,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-campus-background">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-lg text-campus-text font-cinzel mb-6 text-center">
          Student Registration
        </h1>

        <div className="mb-4">
          <label className="block text-campus-text font-medium font-noto_serif mb-2">
            Profile Picture
          </label>
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleImageChange}
          />
          {formData.profilePicture && (
            <img
              src={URL.createObjectURL(formData.profilePicture)}
              alt="Profile Preview"
              className="mt-5 h-40 w-40 object-cover rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}

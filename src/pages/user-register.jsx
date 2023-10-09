// This is the User-Registration of CampusCart
import { useState } from "react";

export default function UserRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    emailAddress: "",
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
  const removeProfilePicture = () => {
    setFormData({
      ...formData,
      profilePicture: null,
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
          {formData.profilePicture && (
            <div className="mt-5 text-center">
              {/*Display Profile Picture*/}
              <div className="flex justify-center items-center">
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Profile Preview"
                  className="h-40 w-40 object-cover rounded-full "
                />
              </div>
              {/*Remove Button*/}
              <button
                onClick={removeProfilePicture}
                className="text-sm font-noto_serif text-white bg-campus-red hover:bg-campus-accent py-1 px-2 mt-2 mb-2 rounded-md cursor-pointer"
              >
                Remove
              </button>
            </div>
          )}
          {/*Upload Profile Picture*/}
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-2"
          />
        </div>
        {/* Student First Name */}
        <div className="mb-4">
          <label className="block text-campus-text font-noto_serif font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Kate"
            className="border border-black rounded-md p-2 w-full"
            value={formData.firstName}
          />
        </div>

        {/* Student Last Name */}
        <div className="mb-4">
          <label className="block text-campus-text font-noto_serif font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Smith"
            className="border border-black rounded-md p-2 w-full"
            value={formData.lastName}
          />
        </div>
        {/* Student Number */}
        <div className="mb-4">
          <label className="block text-campus-text font-noto_serif font-medium mb-2">
            Seneca Student Number
          </label>
          <input
            type="text"
            name="studentId"
            placeholder="123456789"
            className="border border-black rounded-md p-2 w-full"
            value={formData.studentId}
          />
        </div>
        {/* Student Email */}
        <div className="mb-4">
          <label className="block text-campus-text font-noto_serif font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="emailAddress"
            placeholder="katesmith@myseneca.ca"
            className="border border-black rounded-md p-2 w-full"
            value={formData.emailAddress}
          />
        </div>

        {/* Student Password */}
        <div className="mb-4">
          <label className="block text-campus-text font-noto_serif font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*************"
            className="border border-black rounded-md p-2 w-full"
            value={formData.password}
          />
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePicture = () => {
    setProfilePicture(null);
  };
 return (
  <div>
      <div>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-white p-6">
              <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
              <form className="space-y-4">
                <div className="flex flex-col">
                 <label htmlFor="firstName" className="mb-1 text-sm font-medium text-gray-700">First name</label>
                 <input type="text" id="firstName" className="block w-full border-b-2 border-gray-200 focus:border-green-400 focus:outline-none" />
                </div>
                <div className="flex flex-col">
                 <label htmlFor="lastName" className="mb-1 text-sm font-medium text-gray-700">Last name</label>
                 <input type="text" id="lastName" className="block w-full border-b-2 border-gray-200 focus:border-green-400 focus:outline-none" />
                </div>
                <div className="flex flex-col">
                 <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">Email</label>
                 <input type="email" id="email" className="block w-full border-b-2 border-gray-200 focus:border-green-400 focus:outline-none" />
                </div>
                <button type="submit" className="px-4 py-2 bg-green-400 text-white rounded-lg">Update Details</button>
              </form>
            </div>
            <div className="bg-white p-6 flex flex-col items-center justify-center"> {/* Center content */}
              <div className="mb-4">
                {profilePicture ? (
                  <Image
                    src={profilePicture}
                    alt="Profile"
                    width={20}
                    height={20}
                    className="w-24 h-24 object-cover rounded-full"
                  />
                ) : (
                  <FaUser size={72} color="#4A5568" />
                )}
              </div>
              <div className="flex flex-col items-center">
                <label htmlFor="profilePicture" className="px-4 py-2 bg-blue-500 text-white cursor-pointer flex items-center justify-center rounded-lg mb-2">
                  Change Profile Picture
                  <input
                    type="file"
                    id="profilePicture"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilePictureChange}
                  />
                </label>
                {profilePicture && (
                  <button
                    type="button"
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    onClick={handleRemovePicture}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
};


export default Profile;
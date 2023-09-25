import NavbarLogin from '@/components/NavbarLogin';

const PartnerRegistration = () => {
  return (
    <div>
      <NavbarLogin />
      <div
        className="min-h-screen bg-cover bg-center bg-backgroundColor"
        style={{ backgroundImage: "url('/images/background.png') " }}
      >
        {/*Return Button*/}
        <div className="px-4 py-2">
          <a href="/" className="text-textColor flex items-center mt-10 ml-20">
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </a>
        </div>
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg text-textColor flex flex-col items-center justify-center ">
          <h2 className="text-2xl mb-6 font-fauna-regular">Partner Registration</h2>
          <form>
            <div className="mb-4 flex space-x-4 text-textColor">
              {/* Store Name */}
              <div className="w-1/2">
                <label htmlFor="storeName" className="">
                  Store Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="storeName"
                  name="storeName"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter store name"
                  required
                />
              </div>

              {/* Contact Name */}
              <div className="w-1/2">
                <label htmlFor="contactName" className="">
                  Contact Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter contact name"
                  required
                />
              </div>
            </div>

            <div className="mb-4 flex space-x-4">
              {/* Contact Phone Number */}
              <div className="w-1/2">
                <label htmlFor="contactPhoneNumber" className="">
                  Contact Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactPhoneNumber"
                  name="contactPhoneNumber"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none  focus:border-blue-500"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              {/* Contact Email */}
              <div className="w-1/2">
                <label htmlFor="contactEmail" className="">
                  Contact Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter contact email"
                  required
                />
              </div>
            </div>

            {/* Store Address */}
            <div className="mb-6">
              <label htmlFor="storeAddress" className="">
                Store Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="storeAddress"
                name="storeAddress"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter Store Address"
                required
              />
            </div>

            {/* Store Description */}

            <div className="mb-6">
              <label htmlFor="storeDesc" className="">
                Store Description<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="storeDescription"
                name="storeDescription"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter Store Description"
                required
              />
            </div>
            {/* Checkbox */}
            <div className="mb-4">
              <label className="">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  className="mr-2 leading-tight"
                  required
                />
                Accept Terms and Conditions<span className="text-red-500">*</span>
              </label>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerRegistration;

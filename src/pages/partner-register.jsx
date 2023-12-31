// This is the Partner-Registration of CampusCart

import { useState } from "react";
import { useRouter } from "next/router";
import Alert from "@/components/alert";
import { PartnerRegisterImage } from "../../public";
import { registerPartner } from "lib/authenticate";
export default function PartnerRegister() {
  const clearFormData = {
    storeName: "",
    storeEmail: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      postalCode: "",
      city: "",
      state: "",
      country: "",
    },
    storeDescription: "",
    contactFirstName: "",
    contactLastName: "",
    acceptTerms: false,
  };

  const [formData, setFormData] = useState(clearFormData);

  const [errors, setErrors] = useState({
    storeName: "",
    storeEmail: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      postalCode: "",
      city: "",
      state: "",
      country: "",
    },
    storeDescription: "",
    contactFirstName: "",
    contactLastName: "",
    acceptTerms: "",
  });

  const router = useRouter();
  const [warning, setWarning] = useState(null);

  // Data Validation
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (formData.contactFirstName.trim() === "") {
      newErrors.contactFirstName = "Required: Contact First Name";
      valid = false;
    } else {
      newErrors.contactFirstName = "";
    }

    if (formData.contactLastName.trim() === "") {
      newErrors.contactLastName = "Required: Contact Last Name";
      valid = false;
    } else {
      newErrors.contactLastName = "";
    }

    if (formData.storeName.trim() === "") {
      newErrors.storeName = "Required: Store Name";
      valid = false;
    } else {
      newErrors.storeName = "";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.storeEmail)) {
      newErrors.storeEmail = "Email address is invalid";
      valid = false;
    } else {
      newErrors.storeEmail = "";
    }

    // store address 
    if (formData.address.addressLine1.trim() === "") {
      newErrors.address.addressLine1 = "Required: Address Line 1";
      valid = false;
    } else {
      newErrors.address.addressLine1 = "";
    }

    if (formData.address.addressLine2.trim() === "") {
      newErrors.address.addressLine2 = "";
    }

    if (formData.address.postalCode.trim() === "") {
      newErrors.address.postalCode = "Required: Postal Code";
      valid = false;
    } else {
      newErrors.address.postalCode = "";
    }

    if (formData.address.city.trim() === "") {
      newErrors.address.city = "Required: City";
      valid = false;
    } else {
      newErrors.address.city = "";
    }

    if (formData.address.state.trim() === "") {
      newErrors.address.state = "Required: State";
      valid = false;
    } else {
      newErrors.address.state = "";
    }

    if (formData.address.country.trim() === "") {
      newErrors.address.country = "Required: Country";
      valid = false;
    } else {
      newErrors.address.country = "";
    }

    if (formData.storeDescription.trim() === "") {
      newErrors.storeDescription = "Required: Store Description";
      valid = false;
    } else {
      newErrors.storeDescription = "";
    }
    //Terms and Conditions
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms and conditions";
      valid = false;
    } else {
      newErrors.acceptTerms = "";
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWarning("");
    if (validateForm()) {
      console.log("Form submitted:", formData);
      try {
        // Handle form submission and routing here
        await registerPartner(formData);
        setFormData(clearFormData);
        router.push("/confirm-partner");
      } catch (err) {
        setWarning(err.message);
        setFormData(clearFormData);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center shadow-lg dark:bg-neutral-100" style={{
      borderRadius: "10px",
    }}>
      <div
        className="w-full sm:w-1/2 md:w-1/2 p-8 rounded-b-lg lg:w-6/12 lg:rounded-l-lg lg:rounded-br-none"
      // style={{
      //   backgroundImage: `url(${PartnerRegisterImage.formbackground})`,
      //   marginBottom: "20px",
      //   marginTop: "20px",
      //   backgroundSize: "cover",
      //   display: "flex",
      //   flexDirection: "column",
      //   marginLeft: "90px",
      //   minHeight: "115vh",
      //   maxHeight: "115vh",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
      >

        <h1 className="text-lg text-campus-text font-cinzel mb-6 rounded-lg text-center">
          Partner Registration
        </h1>
        {warning && (
          <>
            <Alert message={warning} />
            <br />
            <br />
          </>
        )}
        <form onSubmit={handleSubmit}>
          {/* Partner First And Last Name */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-4 group" >
              <input
                type="text"
                name="contactFirstName"
                id="contactFirstName"
                className="block py-2.5  font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
                placeholder=" "
                value={formData.contactFirstName}
                onChange={(e) =>
                  setFormData({ ...formData, contactFirstName: e.target.value })
                }
              />
              <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Contact First Name*
              </label>
              <span style={{ fontSize: '11px' }} className="text-campus-accent text-sm">
                {errors.contactFirstName}
              </span>
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="text"
                name="contactLastName"
                id="contactLastName"
                className="block py-2.5 font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
                placeholder=" "
                value={formData.contactLastName}
                onChange={(e) =>
                  setFormData({ ...formData, contactLastName: e.target.value })
                }
              />
              <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Contact Last Name*
              </label>
              <span style={{ fontSize: '11px' }} className="text-campus-accent text-sm">
                {errors.contactLastName}
              </span>
            </div>
          </div>
          {/* Store Name */}
          <div className="relative z-0 w-full mb-4 group">
            <input
              type="text"
              name="storeName"
              id="storeName"
              className="block py-2.5 font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
              placeholder=" "
              value={formData.storeName}
              onChange={(e) =>
                setFormData({ ...formData, storeName: e.target.value })
              }
            />
            <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Store Name*
            </label>
            <span style={{ fontSize: '11px' }} className="text-campus-accent text-sm">
              {errors.storeName}
            </span>
          </div>
          {/* Store Email */}
          <div className="relative z-0 w-full mb-4 group">
            <input
              type="email"
              name="storeEmail"
              id="storeEmail"
              className="block py-2.5  font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
              placeholder=" "
              value={formData.storeEmail}
              onChange={(e) =>
                setFormData({ ...formData, storeEmail: e.target.value })
              }
            />
            <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Store Email Address*
            </label>
            <span style={{ fontSize: '11px' }} className="text-campus-accent text-sm">
              {errors.storeEmail}
            </span>
          </div>
          {/* Address Line 1 */}
          <div className="grid md:grid-cols-2 md:gap-6">
            {/* Left side */}
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="text"
                name="addressLine1"
                id="addressLine1"
                className="block py-2.5 font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
                placeholder=" "
                value={formData.address.addressLine1}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      addressLine1: e.target.value,
                    }
                  })
                }
              />
              <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Address Line 1*
              </label>
              <span style={{ fontSize: '11px' }} className="text-campus-accent text-sm">
                {errors.address.addressLine1}
              </span>
            </div>

            {/* Right side */}
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="text"
                name="addressLine2"
                id="addressLine2"
                className="block py-2.5 font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
                placeholder=" "
                value={formData.address.addressLine2}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      addressLine2: e.target.value,
                    }
                  })
                }
              />
              <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Address Line 2 (optional)
              </label>
              <span style={{ fontSize: '11px' }} className="text-campus-accent text-sm">
                {errors.address.addressLine2}
              </span>
            </div>
            {/* Left side */}
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                className="block py-2.5 font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
                placeholder=" "
                value={formData.address.postalCode}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      postalCode: e.target.value,
                    }
                  })
                }
              />
              <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Postal Code*
              </label>
              <span className="text-campus-accent text-sm">
                {errors.address.postalCode}
              </span>
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="text"
                name="city"
                id="city"
                className="block py-2.5 font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
                placeholder=" "
                value={formData.address.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      city: e.target.value,
                    }
                  })
                }
              />
              <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                City*
              </label>
              <span style={{ fontSize: '11px' }} className="text-campus-accent text-sm">
                {errors.address.city}
              </span>
            </div>
            {/* Right side */}
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="text"
                name="state"
                id="state"
                className="block py-2.5 font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
                placeholder=" "
                value={formData.address.state}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      state: e.target.value,
                    }
                  })
                }
              />
              <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                State*
              </label>
              <span style={{ fontSize: '11px' }} className="text-campus-accent text-sm">
                {errors.address.state}
              </span>
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <input
                type="text"
                name="country"
                id="country"
                className="block py-2.5 font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
                placeholder=" "
                value={formData.address.country}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      country: e.target.value,
                    }
                  })
                }
              />
              <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Country*
              </label>
              <span style={{ fontSize: '11px' }} className="text-campus-accent text-sm">
                {errors.address.country}
              </span>
            </div>
          </div>
          {/* Store Description */}
          <div className="relative z-0 w-full mb-4 group">
            <textarea
              name="storeDescription"
              id="storeDescription"
              className="block py-2.5 font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
              placeholder=" "
              value={formData.storeDescription}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  storeDescription: e.target.value,
                })
              }
            />
            <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Store Description*
            </label>
            <span style={{ fontSize: '11px' }} className="text-campus-accent text-sm">
              {errors.storeDescription}
            </span>
          </div>
          {/* Accept Terms and Conditions Checkbox */}
          <div className="mb-4">
            <div>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={(e) =>
                  setFormData({ ...formData, acceptTerms: e.target.checked })
                }
              />
              <label className="ml-2 text-campus-text font-noto_serif font-medium">
                Accept Terms and Conditions*
              </label>
            </div>
            <span style={{ fontSize: '11px' }} className="text-campus-accent block mt-2 text-sm">
              {errors.acceptTerms}
            </span>
          </div>
          {/* Register Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-campus-red text-white font-noto_serif font-medium py-2 px-4 rounded-md hover:bg-campus-accent"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div
        className="hidden sm:block w-1/2 bg-cover bg-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
        style={{
          backgroundImage: `url(${PartnerRegisterImage.grocerybackground})`,
          minHeight: "115vh",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          marginRight: "90px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
}

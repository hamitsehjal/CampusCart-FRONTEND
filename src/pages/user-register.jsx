// This is the User-Registration of CampusCart
import { registerUser } from "lib/authenticate";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Alert from "@/components/alert";
export default function UserRegister() {
  const clearFormData = {
    firstName: "",
    lastName: "",
    studentId: "",
    emailAddress: "",
    password: "",
    profilePicture: null,
    acceptTerms: false,
  };
  const [formData, setFormData] = useState(clearFormData);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    emailAddress: "",
    password: "",
    acceptTerms: "",
  });

  const router = useRouter();
  const [warning, setWarning] = useState(null);
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
  //Data Validation
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    //First Name
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "Required: First Name";
      valid = false;
    } else {
      newErrors.firstName = "";
    }
    //Last Name
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Required: Last Name";
      valid = false;
    } else {
      newErrors.lastName = "";
    }
    //Student Id
    if (!/^\d{9}$/.test(formData.studentId)) {
      newErrors.studentId = "Student ID must be 9 digits";
      valid = false;
    } else {
      newErrors.studentId = "";
    }
    //Email
    if (!/^\S+@\S+\.\S+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Email address is invalid";
      valid = false;
    } else if (!formData.emailAddress.endsWith("@myseneca.ca")) {
      newErrors.emailAddress =
        "Please Provide Your Seneca Email (@myseneca.ca)";
      valid = false;
    } else {
      newErrors.emailAddress = "";
    }
    //Password
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    } else {
      newErrors.password = "";
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
    if (validateForm()) {
      setWarning('');
      console.log("Form submitted:", formData);
      try {
        await registerUser(formData);
        setFormData(clearFormData);
        router.push('/login');
      } catch (err) {
        setWarning(err.message);
        setFormData(clearFormData);
      }
      //Clear input fields after submitting form
    }
  };
  return (
    <div className=" bg-white p-8  shadow-md">
      <h1 className="text-lg text-campus-text font-cinzel mb-6 text-center">
        Student Registration
      </h1>
      {warning && <><Alert message={warning} /><br /><br /></>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-campus-text font-medium font-noto_serif mb-2">
            Profile Picture
          </label>
          {formData.profilePicture && (
            <div className="mt-5 text-center">
              {/*Display Profile Picture*/}
              <div className="flex justify-center items-center">
                <Image
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Profile Preview"
                  className="object-cover rounded-full "
                  width={200}
                  height={200}
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
        {/* Student First And Last Name */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-4 group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="block py-2.5  font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
              placeholder=" "
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              First name*
            </label>
            <span className="text-campus-accent text-sm">
              {errors.firstName}
            </span>
          </div>
          <div className="relative z-0 w-full mb-4 group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="block py-2.5 font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
              placeholder=" "
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last name*
            </label>
            <span className="text-campus-accent text-sm">
              {errors.lastName}
            </span>
          </div>
        </div>
        {/* Student Number */}
        <div className="relative z-0 w-full mb-4 group">
          <input
            type="text"
            name="studentId"
            id="studentId"
            className="block py-2.5 font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
            placeholder=" "
            value={formData.studentId}
            onChange={(e) =>
              setFormData({ ...formData, studentId: e.target.value })
            }
          />
          <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Seneca Student Number*
          </label>
          <span className="text-campus-accent text-sm">{errors.studentId}</span>
        </div>
        {/* Student Email */}
        <div className="relative z-0 w-full mb-4 group">
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            className="block py-2.5  font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
            placeholder=" "
            value={formData.emailAddress}
            onChange={(e) =>
              setFormData({ ...formData, emailAddress: e.target.value })
            }
          />
          <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email Address*
          </label>
          <span className="text-campus-accent text-sm">
            {errors.emailAddress}
          </span>
        </div>
        {/* Student Password */}
        <div className="relative z-0 w-full mb-4 group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
            placeholder=" "
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password*
          </label>
          <span className="text-campus-accent text-sm">{errors.password}</span>
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
          <span className="text-campus-accent block mt-2 text-sm">
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
  );
}

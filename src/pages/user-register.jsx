// This is the User-Registration of CampusCart
import { useState } from "react";

export default function UserRegister() {
  const clearFormData = {
    firstName: "",
    lastName: "",
    studentId: "",
    emailAddress: "",
    password: "",
    profilePicture: null,
  };

  const [formData, setFormData] = useState(clearFormData);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    emailAddress: "",
    password: "",
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

  //Data Validation
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "Required: First Name";
      valid = false;
    } else {
      newErrors.firstName = "";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Required: Last Name";
      valid = false;
    } else {
      newErrors.lastName = "";
    }

    if (!/^\d{9}$/.test(formData.studentId)) {
      newErrors.studentId = "Student ID must be 9 digits";
      valid = false;
    } else {
      newErrors.studentId = "";
    }

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

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    } else {
      newErrors.password = "";
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      //Clear input fields after submitting form
      setFormData(clearFormData);
    }
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
            className={`border ${
              errors.firstName ? "border-campus-accent" : "border-black"
            } rounded-md p-2 w-full`}
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <span className="text-campus-accent">{errors.firstName}</span>
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
            className={`border ${
              errors.lastName ? "border-campus-accent" : "border-black"
            } rounded-md p-2 w-full`}
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          <span className="text-campus-accent">{errors.lastName}</span>
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
            className={`border ${
              errors.studentId ? "border-campus-accent" : "border-black"
            } rounded-md p-2 w-full`}
            value={formData.studentId}
            onChange={(e) =>
              setFormData({ ...formData, studentId: e.target.value })
            }
          />
          <span className="text-campus-accent">{errors.studentId}</span>
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
            className={`border ${
              errors.emailAddress ? "border-campus-accent" : "border-black"
            } rounded-md p-2 w-full`}
            value={formData.emailAddress}
            onChange={(e) =>
              setFormData({ ...formData, emailAddress: e.target.value })
            }
          />
          <span className="text-campus-accent">{errors.emailAddress}</span>
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
            className={`border ${
              errors.password.length ? "border-campus-accent" : "border-black"
            } rounded-md p-2 w-full`}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <span className="text-campus-accent">{errors.password}</span>
        </div>

        {/* Register Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-campus-accent text-white font-noto_serif font-medium py-2 px-4 rounded-md hover:bg-campus-accent-dark"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

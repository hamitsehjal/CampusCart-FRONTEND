// This is the User-Login of CampusCart
import { useState } from "react";
import { useRouter } from "next/router";
import { authenticateUser } from "lib/authenticate";
import { LoginImage } from "../../public";
import Alert from "@/components/alert";
export default function Login() {
  const clearFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(clearFormData);
  const [errors, setErrors] = useState(clearFormData);

  const router = useRouter();
  const [warning, setWarning] = useState(null);
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    //Email
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    } else if (!formData.email.endsWith("@myseneca.ca")) {
      newErrors.email =
        "Please Provide Your Seneca Email (@myseneca.ca)";
      valid = false;
    } else {
      newErrors.email = "";
    }

    //Password
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      valid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWarning('')

    if (validateForm()) {
      console.log("Form Validation was successful:", formData);
      try {
        await authenticateUser(formData.email, formData.password);
        setFormData(clearFormData);
        router.push('/stores');
      } catch (err) {
        setWarning(err.message);
        setFormData(clearFormData);

      }
    } else {
      console.log("Form Validation Failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center shadow-lg dark:bg-neutral-300" style={{
      borderRadius: "10px",
    }}>
     <div
        className="w-full sm:w-1/2 md:w-1/2 p-8 rounded-b-lg lg:w-6/12 lg:rounded-l-lg lg:rounded-br-none"
        style={{
          backgroundImage: `url(${LoginImage.loginImageForm})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          marginLeft: "90px",
          minHeight: "80vh", 
          maxHeight: "80vh",
          alignItems: "center", 
          justifyContent: "center",
        }}
      >
      <h1 className="text-lg text-campus-text font-cinzel mb-6 text-center">
        Student Log In
      </h1>
      {warning && <> <Alert message={warning} /><br /><br /></>}
      <form onSubmit={handleSubmit}>
        {/* Student Email */}
        <div className="relative z-0 w-full mb-4 group">
          <input
            type="email"
            className="block py-2.5  font-noto_serif px-0 w-full text-sm text-campus-text bg-transparent border-0 border-b-2 border-campus-blue appearance-none focus:outline-none focus:ring-0 focus:border-campus-secondary peer"
            placeholder=" "
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <label className="peer-focus:font-medium font-noto_serif absolute text-sm text-campus-blue  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-campus-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email Address*
          </label>
          <span className="text-campus-accent text-sm">
            {errors.email}
          </span>
        </div>
        {/* Student Password */}
        <div className="relative z-0 w-full mb-4 group">
          <input
            type="password"
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
        {/* Login Button */}
        <div className="text-center">
          <button className="bg-campus-red text-white font-noto_serif font-medium py-2 px-4 rounded-md hover:bg-campus-accent">
            Login
          </button>
        </div>
      </form>
      {/* Forgot Password Button */}
      {/* <div className="text-center mt-4">
        <button
          className="text-campus-blue hover:underline"
        //onClick={() => router.push("#")}  // TO DO: Change route to forgot password page
        >
          Forgot Password?
        </button>
      </div> */}
    </div>
    <div
        className="hidden sm:block w-1/2 bg-cover bg-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
        style={{
          backgroundImage: `url(${LoginImage.loginImage})`,
          minHeight: "80vh",
          height: "100%", 
          display: "flex",
          flexDirection: "column",
          marginRight: "90px",
        }}
      ></div>
    </div>
  );
}

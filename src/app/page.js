import NavbarLogin from "../components/NavbarLogin";

const LoginPage = () => {
  return (
    <div>
      <NavbarLogin />
      {<div className="min-h-screen bg-cover bg-center bg-backgroundColor" style={{ backgroundImage: "url('/images/background.png') "}}>
      <div className="px-4 py-2">
        <a href="/home" className="text-textColor hover:underline flex items-center mt-10 ml-20">
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              width="14" height="14"
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
    </div>}
    </div>
    
  );
};

export default LoginPage;
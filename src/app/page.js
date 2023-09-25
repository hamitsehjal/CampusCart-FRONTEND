import NavbarLogin from '../components/NavbarLogin';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div>
      <NavbarLogin />
      <div
        className="min-h-screen bg-cover bg-center bg-backgroundColor"
        style={{ backgroundImage: "url('/images/background.png') " }}
      >
        {/*Return Button*/}
        <div className="px-4 py-2">
          <a href="/home" className="text-textColor flex items-center mt-10 ml-20">
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
        {/*LOGIN FORM*/}
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-2xl font-fauna-regular text-textColor mb-6">Log In</h2>
          <form>
            {/*EMAIL*/}
            <div className="mb-6 flex items-center text-textColor">
              <label htmlFor="email" className=""></label>
              <svg
                className="w-7 h-7 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2" />
              </svg>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Your email"
                required
              />
            </div>
            {/*PASSWORD*/}
            <div className="mb-6 flex items-center text-textColor">
              <label htmlFor="password" className=""></label>
              <svg
                className="w-7 h-7 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <circle cx="12" cy="16" r="1" />
                <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Your password"
                required
              />
            </div>
            {/*FORGOT PASSWORD?*/}
            <div className=" mb-6 text-right">
              <a href="/forgot-password" className="text-sm text-textColor hover:underline">
                Forgot Password?
              </a>
            </div>
            {/*LOGIN BUTTON*/}
            <div className="mb-3">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 "
              >
                Login
              </button>
            </div>
            {/*SIGNUP BUTTON*/}
            <div className="mb-3 text-center ">
              <Link
                href="/student-registration"
                className="text-sm text-textColor hover:underline flex items-center justify-center"
              >
                Sign Up
                <svg
                  className="w-6 h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            {/*PARTNER REGISTRATION BUTTON*/}
            <div className="text-center ">
              <Link
                href="/PartnerRegistration"
                className="text-sm text-textColor hover:underline flex items-center justify-center"
              >
                Partner Registration
                <svg
                  className="w-6 h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

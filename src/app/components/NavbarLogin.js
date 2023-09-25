const NavbarLogin = () => {
  return (
    <nav className="bg-primaryColor1 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-textColor text-cinzel text-xl font-semibold mr-10">CampusCart</span>
              <a href="/" className="text-textColor text-cinzel text-l font-semibold mr-10">Home</a>
              <a href="/contact" className="text-textColor text-cinzel text-l font-semibold">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogin;
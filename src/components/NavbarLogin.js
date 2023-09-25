const NavbarLogin = () => {
  return (
    <nav className="bg-primaryColor1 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-headingColor font-cinzel-semibold text-xl mr-10">CampusCart</span>
            <a href="/home" className="text-headingColor font-cinzel-semibold text-l  mr-10">
              Home
            </a>
            <a href="/contact" className="text-headingColor font-cinzel-semibold text-l">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogin;

import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">State Management Comparison</h1>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;

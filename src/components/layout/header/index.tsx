import Nav from "../nav";

const Header = () => {
  return (
    <header className="flex justify-between mx-auto">
      <h1 className="text-4xl font-semibold">
        Manuel<span className="text-tokyo-green">.</span>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;

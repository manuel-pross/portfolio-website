import Nav from "../nav";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold">
          Manuel<span className="text-tokyo-green">.</span>
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;

import Nav from "../nav";
import Profile from "../profile";

const Header = () => {
  return (
    <header className="relative flex justify-between items-center pt-3 px-4">
      <h1 className="text-4xl font-semibold">
        Manuel<span className="text-tokyo-green">.</span>
      </h1>
      <Nav />
      <Profile />
    </header>
  );
};

export default Header;

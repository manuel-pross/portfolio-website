import Profile from "@/components/layout/profile";
import Nav from "../nav";

const Header = () => {
  return (
    <header>
      <div className="relative flex justify-between items-center mb-14">
        <h1 className="h1 mb-0">
          Manuel<span className="text-tokyo-green">.</span>
        </h1>
        <Nav />
      </div>
      <Profile />
    </header>
  );
};

export default Header;

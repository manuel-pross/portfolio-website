import Profile from "@/components/layout/profile";
import Nav from "../nav";

const Header = () => {
  return (
    <header className="">
      <div className="relative flex justify-between items-center pt-3 px-4">
        <h1 className="h1">
          Manuel<span className="text-tokyo-green">.</span>
        </h1>
        <Nav />
      </div>
      <Profile />
    </header>
  );
};

export default Header;

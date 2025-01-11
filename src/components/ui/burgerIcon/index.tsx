import { useState } from "react";

type BurgerIconProps = {
  onStatusChange: (isOpen: boolean) => void;
};

const BurgerIcon = ({ onStatusChange }: BurgerIconProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const burgerBgColor = { backgroundColor: isOpen ? "#f7768e" : "" };

  const handleChange = () => {
    setIsOpen(!isOpen);
    onStatusChange(isOpen);
  };

  return (
    <div className="relative w-[30px] h-[30px]">
      <input
        className="peer absolute z-10 opacity-0 block h-[30px] w-[30px] cursor-pointer"
        type="checkbox"
        defaultChecked={false}
        onChange={handleChange}
      />
      <span
        className="burger-icon-stroke w-[30px] h-[5px] origin-bottom-left peer-checked:rotate-45 peer-checked:scale-x-[1.07]"
        style={burgerBgColor}
      ></span>
      <span className="burger-icon-stroke top-3 w-6 h-[5px] peer-checked:scale-x-0"></span>
      <span
        className="burger-icon-stroke top-6 w-[30px] h-[5px] origin-top-left peer-checked:rotate-[-45deg] peer-checked:scale-x-[1.07]"
        style={burgerBgColor}
      ></span>
    </div>
  );
};

export default BurgerIcon;

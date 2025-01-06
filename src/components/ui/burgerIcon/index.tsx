type BurgerIconProps = {
  onChange: () => void;
};

const BurgerIcon = ({ onChange }: BurgerIconProps) => {
  return (
    <div className="relative">
      <input
        className="peer absolute z-10 opacity-0 block h-[30px] w-[30px] cursor-pointer"
        type="checkbox"
        onChange={onChange}
      />
      <span className="absolute w-[30px] h-[5px] bg-tokyo-green origin-bottom-left transition-transform duration-500 peer-checked:rotate-45 peer-checked:scale-x-[1.07]"></span>
      <span className="absolute top-3 w-6 h-[5px] bg-tokyo-green peer-checked:scale-y-0"></span>
      <span className="absolute top-6 w-[30px] h-[5px] bg-tokyo-green origin-top-left transition-transform duration-500 peer-checked:rotate-[-45deg] peer-checked:scale-x-[1.07]"></span>
    </div>
  );
};

export default BurgerIcon;

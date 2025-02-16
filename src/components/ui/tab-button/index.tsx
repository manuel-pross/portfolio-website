type TabButtonProps = {
  text: string;
  onClick?: (clickedBtn: string) => void;
};

function TabButton({ text, onClick }: TabButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return;

    const btnText = event.currentTarget.textContent;

    if (!btnText) return;

    onClick(btnText);
  };

  return (
    <button
      className="w-full py-2 px-3 rounded-lg bg-tokyo-storm hover:text-tokyo-storm hover:bg-tokyo-cyan hover:cursor-pointer transition-all duration-100"
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default TabButton;

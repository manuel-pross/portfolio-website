import useSelectedTabStore from "@/stores/selectedTabStore";

type TabButtonProps = {
  text: string;
  name: string;
  onClick?: (clickedBtn: string) => void;
};

function TabButton({ text, name, onClick }: TabButtonProps) {
  const selectedTab = useSelectedTabStore((state) => state.selectedTab);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return;

    const btnText = event.currentTarget.textContent;

    if (!btnText) return;

    console.log("selected Tab:", selectedTab);

    onClick(btnText);
  };

  return (
    <button
      style={
        selectedTab === name
          ? {
            backgroundColor: "#2ac3de",
            color: "#24283b",
          }
          : {}
      }
      className="w-full py-2 px-3 rounded-lg bg-tokyo-storm hover:text-tokyo-storm hover:bg-tokyo-cyan hover:cursor-pointer transition-all duration-100"
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default TabButton;

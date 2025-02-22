import TabContent from "@/components/layout/tab-content";
import TabButton from "@/components/ui/tab-button";
import useSelectedTabStore from "@/stores/selectedTabStore";
import { Tab } from "@/types";

const tabBtns: Tab[] = [
  { id: 1, name: "Experience" },
  { id: 2, name: "Education" },
  { id: 3, name: "Skills" },
  { id: 4, name: "About me" },
];

function Resume() {
  const updateSelectedTab = useSelectedTabStore(
    (state) => state.updateSelectedTab,
  );

  const handleClick = (newSelectedTab: string) => {
    updateSelectedTab(newSelectedTab);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[30%_70%] lg:gap-8 xl:gap-16 max-w-[1500px]">
      <div className="flex flex-col gap-6 mb-8 xl:mb-0">
        {tabBtns.map((tabBtn) => (
          <TabButton key={tabBtn.id} text={tabBtn.name} onClick={handleClick} />
        ))}
      </div>

      <TabContent />
    </section>
  );
}

export default Resume;

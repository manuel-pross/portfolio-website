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
    <section>
      <h2 className="h2 text-center lg:text-left">Work Experience</h2>
      <div className="flex flex-col gap-6">
        {tabBtns.map((tabBtn) => (
          <TabButton key={tabBtn.id} text={tabBtn.name} onClick={handleClick} />
        ))}
      </div>
      <TabContent />
    </section>
  );
}

export default Resume;

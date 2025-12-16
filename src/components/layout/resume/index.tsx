import TabContent from "@/components/layout/tab-content";
import TabButton from "@/components/ui/tab-button";
import useSelectedTabStore from "@/stores/selectedTabStore";
import { Tab } from "@/types";

const tabBtns: Tab[] = [
  { id: 1, name: "experience", displayName: "Arbeitserfahrung" },
  { id: 2, name: "education", displayName: "Bildung" },
  { id: 3, name: "skills", displayName: "Skills" },
  { id: 4, name: "aboutMe", displayName: "Über mich" },
];

function Resume() {
  const updateSelectedTab = useSelectedTabStore(
    (state) => state.updateSelectedTab,
  );

  const handleClick = (newSelectedTab: string) => {
    const foundTabBtn = tabBtns.find((el) => el.displayName === newSelectedTab);
    if (!foundTabBtn) return;

    updateSelectedTab(foundTabBtn.name);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[30%_70%] mb-8 md:mb-12 max-w-[1500px] lg:gap-8 xl:gap-16 ">
      <div className="flex flex-col gap-6 mb-8 xl:mb-0">
        {tabBtns.map((tabBtn) => (
          <TabButton
            key={tabBtn.id}
            name={tabBtn.name}
            text={tabBtn.displayName}
            onClick={handleClick}
          />
        ))}
      </div>

      <TabContent />
    </section>
  );
}

export default Resume;

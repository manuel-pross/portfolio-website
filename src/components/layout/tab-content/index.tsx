import useSelectedTabStore from "@/stores/selectedTabStore";

function TabContent() {
  const selectedTab = useSelectedTabStore((state) => state.selectedTab);

  const getSelectedContent = (selectedTab: string) => {
    let content = undefined;
    switch (selectedTab) {
      case "Experience":
        content = <p>Experience</p>;
        break;

      default:
        content = <p>No tab selected</p>;
        break;
    }

    return content;
  };

  return <>{selectedTab && getSelectedContent(selectedTab)}</>;
}

export default TabContent;

import { create } from "zustand";

type SelectedTabStore = {
  selectedTab: string;
  updateSelectedTab: (newSelectedTab: string) => void;
  resetSelectedTab: () => void;
};

const useSelectedTabStore = create<SelectedTabStore>()((set) => ({
  selectedTab: "Experience",
  updateSelectedTab: (newSelectedTab: string) =>
    set(() => ({ selectedTab: newSelectedTab })),
  resetSelectedTab: () => set({ selectedTab: "Experience" }),
}));

export default useSelectedTabStore;

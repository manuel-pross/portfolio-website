import { create } from "zustand";

type SelectedTabStore = {
  selectedTab: string;
  updateSelectedTab: (newSelectedTab: string) => void;
  resetSelectedTab: () => void;
};

const useSelectedTabStore = create<SelectedTabStore>()((set) => ({
  selectedTab: "experience",
  updateSelectedTab: (newSelectedTab: string) =>
    set(() => ({ selectedTab: newSelectedTab })),
  resetSelectedTab: () => set({ selectedTab: "experience" }),
}));

export default useSelectedTabStore;

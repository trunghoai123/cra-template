import { create } from 'zustand';

const useStateStore = create((set, get) => ({
  isDisplayModal: false,
  setIsDisplayModal: (isDisplayModal) => set({ isDisplayModal }),
}));

export default useStateStore;

import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

export type BearT = {
  count: number;
};

type BearActions = {
  add: (value: number) => void;
  remove: () => void;
};

type BearState = BearT & BearActions;

const initialState: BearT = {
  count: 0,
};

const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        add: (value: number) =>
          set((state) => {
            return {
              ...state,
              count: state?.count + value,
            };
          }),
        remove: () =>
          set((state) => {
            return { ...state, count: 0 };
          }),
        resetStore: () => set({ ...initialState }),
      }),
      {
        name: 'bear-store',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useBearStore;

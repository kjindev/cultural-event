import { create } from "zustand";

interface DataStore {
  searchList: any;
  searchKeyword: string | null;
  recommendList: any;
  totalList: any[] | null;
  changeSearchList: (input: any) => void;
  changeRecommendList: (input: any) => void;
  changeSearchKeyword: (input: any) => void;
  changeTotalList: (input: any[]) => void;
}

const useDataStore = create<DataStore>()((set) => ({
  searchKeyword: null,
  searchList: null,
  recommendList: null,
  totalList: null,
  changeSearchList: (input) =>
    set((state) => ({
      searchList: input,
    })),
  changeRecommendList: (input) =>
    set((state) => ({
      recommendList: input,
    })),
  changeSearchKeyword: (input) =>
    set((state) => ({
      searchKeyword: input,
    })),
  changeTotalList: (input) =>
    set((state) => ({
      totalList: input,
    })),
}));

export default useDataStore;

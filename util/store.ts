import { create } from "zustand";

interface DataStore {
  searchList: any;
  searchKeyword: string;
  changeSearchList: (input: any) => void;
  changeSearchKeyword: (input: string) => void;
}

const useDataStore = create<DataStore>()((set) => ({
  searchKeyword: "",
  searchList: null,
  changeSearchList: (input) =>
    set((state) => ({
      searchList: input,
    })),
  changeSearchKeyword: (input) =>
    set((state) => ({
      searchKeyword: input,
    })),
}));

export default useDataStore;

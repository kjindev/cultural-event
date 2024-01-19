import { debounce, getData } from "@/util/function";
import useDataStore from "@/util/store";

import { ChangeEvent, useCallback, useState } from "react";

export default function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const { searchList, changeSearchKeyword, changeSearchList } = useDataStore();

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      debounce(setInputValue(e.target.value), 500);
    },
    [debounce, setInputValue]
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    changeSearchKeyword(inputValue);
    getData({ codename: inputValue, title: inputValue }).then((res) => {
      changeSearchList(res);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-[400px]">
      <input
        onChange={onChangeInput}
        value={inputValue}
        placeholder="이름, 카테고리로 검색해보세요"
        className="w-full bg-slate-100 px-5 py-3 rounded-xl text-sm "
      />
    </form>
  );
}

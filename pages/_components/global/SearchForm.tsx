import { subColor2 } from "@/util/constant";
import { fontSize } from "@/util/font";
import { debounce, getData } from "@/util/function";
import useDataStore from "@/util/store";

import { css } from "@emotion/react";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export default function SearchForm({ width }: { width?: string }) {
  const [inputValue, setInputValue] = useState("");
  const {
    searchKeyword,
    changeSearchKeyword,
    changeSearchList,
    changeRecommendList,
  } = useDataStore();

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      debounce(setInputValue(e.target.value), 500);
    },
    [debounce, setInputValue]
  );

  // const handleSearch = (event: any) => {
  //   const value = event?.target.value;
  //   debounce(setInputValue(value), 500);
  // };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    changeSearchKeyword(inputValue);
    getData({ codename: inputValue, title: inputValue }).then((res) => {
      changeSearchList(res);
    });
  };

  const style = {
    width: width,
    fontSize: fontSize.sm,
    "& input": {
      width: "100%",
      padding: "12px 0 12px 16px",
      backgroundColor: "#00000010",
      borderRadius: "12px",
      border: "none",
      fontFamily: "SUIT-Regular",
    },
  };

  return (
    <form onSubmit={handleSubmit} css={css(style)}>
      <input
        onChange={onChangeInput}
        value={inputValue}
        placeholder="이름, 카테고리로 검색해보세요"
      />
    </form>
  );
}

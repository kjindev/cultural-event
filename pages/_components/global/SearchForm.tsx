import { subColor2 } from "@/util/constant";
import { fontSize } from "@/util/font";
import { getData } from "@/util/function";
import useDataStore from "@/util/store";

import { css } from "@emotion/react";
import { useState } from "react";

export default function SearchForm({ width }: { width?: string }) {
  const [keyword, setKeyword] = useState("");
  const { changeSearchKeyword, changeSearchList } = useDataStore();

  const handleSearch = (event: any) => {
    const value = event?.target.value;
    setKeyword(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    changeSearchKeyword(keyword);
    getData({ codename: keyword, title: keyword }).then((res) => {
      console.log(res);
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
        onChange={handleSearch}
        value={keyword}
        placeholder="지역, 이름으로 검색해보세요"
      />
    </form>
  );
}

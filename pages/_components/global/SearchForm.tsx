import { subColor2 } from "@/util/constant";
import { fontSize } from "@/util/font";
import { css } from "@emotion/react";
import { useState } from "react";

export default function SearchForm() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (event: any) => {
    const keyword = event?.target.value;
    setSearchKeyword(keyword);
  };

  return (
    <form css={css(style)} className="w-[90%] text-sm">
      <input
        onChange={handleSearch}
        value={searchKeyword}
        placeholder="지역, 이름으로 검색해보세요"
        className="w-full py-3 px-4 bg-slate-100 rounded-xl text-sm"
      />
    </form>
  );
}

const style = {
  width: "90%",
  fontSize: fontSize.sm,
  "& input": {
    width: "100%",
    padding: "12px 18px",
    backgroundColor: "#00000010",
    borderRadius: "12px",
    border: "none",
    fontFamily: "SUIT-Regular",
  },
};

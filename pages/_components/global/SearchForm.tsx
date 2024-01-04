import { subColor2 } from "@/util/constant";
import { fontSize } from "@/util/font";
import { css } from "@emotion/react";
import { useState } from "react";

export default function SearchForm({ width }: { width?: string }) {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (event: any) => {
    const keyword = event?.target.value;
    setSearchKeyword(keyword);
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
    <form css={css(style)}>
      <input
        onChange={handleSearch}
        value={searchKeyword}
        placeholder="지역, 이름으로 검색해보세요"
      />
    </form>
  );
}

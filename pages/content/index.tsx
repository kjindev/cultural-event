import Head from "next/head";
import { css } from "@emotion/react";
import SearchForm from "../_components/global/SearchForm";
import { maxWidth } from "@/util/constant";
import { fontSize } from "@/util/font";
import ListItem from "../_components/content/ListItem";

export default function Home() {
  return (
    <div
      css={css(style, {
        "& .content-container": {
          flexDirection: "column",
        },
        "& .content-title": {
          textAlign: "center",
        },
        "& .search-box": {
          flexDirection: "column",
        },
      })}
    >
      <div className="content-container">
        <div className="search-box">
          <div className="content-title">
            <span>키워드</span>로 검색한 결과예요
          </div>
          <SearchForm width="500px" />
        </div>
        <div className="list-box">
          <ListItem />
        </div>
      </div>
    </div>
  );
}
const style = {
  width: "100%",
  paddingTop: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .content-container": {
    width: maxWidth,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .search-box": {
      height: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .content-title": {
      fontSize: fontSize.xl,
      color: "#00000090",
      margin: "18px 0",
      "& span": {
        color: "purple",
        fontWeight: 700,
      },
    },
    "& .list-box": {
      margin: "20px",
      padding: "0 20px",
      width: "90%",
    },
  },
};

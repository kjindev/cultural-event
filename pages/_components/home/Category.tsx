import { maxWidth } from "@/util/constant";
import { css } from "@emotion/react";
import React from "react";
import Book from "./Book";
import { fontSize } from "@/util/font";

export default function Category() {
  const list = ["전시/미술", "교양/강좌", "공연", "축제"];

  return (
    <div
      css={css(style, {
        "& .category-container": {
          flexDirection: "column",
        },
      })}
    >
      <div className="category-container">
        <div className="category-title">키워드를 추천해줄게요</div>
        <div className="category-books">
          {list.map((item, i) => (
            <div key={i}>
              <Book
                className="book-item"
                width={180}
                height={210}
                color="#d6d3d1"
              >
                <div>{item}</div>
              </Book>
            </div>
          ))}
          {/* <Book width={180} height={210} color="#d6d3d1">
            <div>hello</div>
          </Book>
          <Book width={180} height={210} color="#d6d3d1">
            <div>hello</div>
          </Book>
          <Book width={180} height={210} color="#d6d3d1">
            <div>hello</div>
          </Book> */}
        </div>
      </div>
    </div>
  );
}

const style = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .category-container": {
    width: maxWidth,
  },
  "& .category-title": {
    width: maxWidth,
    fontSize: fontSize.xl2,
    fontWeight: 700,
    padding: "36px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .category-books": {
    width: maxWidth,
    fontWeight: 300,
    padding: "36px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .book-item": {
    margin: "0 20px",
  },
};

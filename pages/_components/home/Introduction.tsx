import { css } from "@emotion/react";
import { Illustration } from "./Illustration";
import { fontSize } from "@/util/font";
import SearchForm from "../global/SearchForm";

export default function Introduction() {
  return (
    <div css={css(style)}>
      <div className="container">
        <div className="text-block">
          <div className="title-block">
            문화생활,
            <br /> 한 눈에 확인해보세요
          </div>
          <div className="sub-title-block">
            지도로 서울 전체의 전시/뮤지컬/오페라를 찾아볼 수 있어요!
          </div>
          <div className="my-5">
            <SearchForm />
          </div>
        </div>
        <div className="illustration-block">
          <Illustration />
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
  "& .container": {
    width: "1200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 0px",
  },
  "& .text-block": {
    width: "450px",
    padding: "0 0px",
  },
  "& .title-block": {
    fontSize: fontSize.xl2,
    fontWeight: 700,
    padding: "12px 0px",
  },
  "& .sub-title-block": {
    fontSize: fontSize.md,
    padding: "12px 0px",
  },
  "& .illustration-block": {
    // width: "450px",
    // height: "300px",
  },
};

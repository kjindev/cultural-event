import Image from "next/image";
import Link from "next/link";

import { css } from "@emotion/react";

import { maxWidth, mq, shadow, subColor2 } from "@/util/constant";

import { fontSize, roboto, robotoBold } from "@/util/font";

export default function NavBar() {
  return (
    <div css={css(style, { position: "fixed" })}>
      <div className="container">
        <div>서울, 오늘의 문화</div>
      </div>
    </div>
  );
}

const style = {
  zIndex: 250,
  width: "100%",
  height: "60px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: shadow,
  "& .container": {
    width: maxWidth,
  },
  // "& .container": {
  //   width: maxWidth,
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   padding: "20px",
  //   [mq[0]]: {
  //     paddingLeft: "20px",
  //   },
  //   [mq[2]]: {
  //     padding: "0",
  //     paddingLeft: "0",
  //   },
  // },
  // "& .title-container": {
  //   display: "flex",
  //   alignItems: "center",
  //   "& .version": {
  //     fontSize: fontSize.xs,
  //     backgroundColor: "#00000018",
  //     padding: "4px 8px",
  //     borderRadius: "18px",
  //   },
  // },
  // "& .link-list": {
  //   display: "none",
  //   [mq[1]]: {
  //     // display: "inline-block",
  //     display: "flex",
  //     alignItems: "center",
  //   },
  // },
  // "& .title": {
  //   fontSize: fontSize.logo,
  //   marginRight: "12px",
  // },
  // "& .category": {
  //   fontSize: fontSize.sm,
  //   padding: "0 1.5rem",
  //   display: "flex",
  //   alignItems: "center",
  // },
  // "& #open": {
  //   margin: "0.3rem",
  // },
  // "& .mode-btn": {
  //   width: "25px",
  //   height: "25px",
  //   borderRadius: "50%",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // "& .mode-btn:hover": {
  //   cursor: "pointer",
  // },
  // "& .icon": {
  //   backgroundColor: subColor2,
  //   padding: 14 / 1.5,
  //   borderRadius: 28,
  // },
  // "& .mobile-menu": {
  //   display: "flex",
  //   cursor: "pointer",
  //   // padding: "0 14px",
  //   [mq[1]]: {
  //     display: "none",
  //   },
  // },
};

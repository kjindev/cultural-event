// /** @jsxImportSource @emotion/react */

import Head from "next/head";
import { Inter } from "next/font/google";
import { css } from "@emotion/react";
import NavBar from "./_components/global/NavBar";
import Main from "./_components/home/Introduction";
import Introduction from "./_components/home/Introduction";

export default function Home() {
  return (
    <>
      <Head>
        <title>서울, 오늘의 문화</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={css(style)}>
        <Introduction />
      </div>
    </>
  );
}

const style = {
  // color: "red",
};

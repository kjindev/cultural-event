import { css } from "@emotion/react";
import SearchForm from "../_components/global/SearchForm";
import { maxWidth, shadow } from "@/util/constant";
import { fontSize } from "@/util/font";
import { useEffect, useState } from "react";
import { APIType } from "@/util/type";
import useDataStore from "@/util/store";
import { useResults } from "@/util/function";

export default function Home() {
  const { searchList, recommendList, searchKeyword } = useDataStore();
  const { status, data, error } = useResults(searchKeyword);

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
        "& .keyword": {
          color: "purple",
          fontWeight: 700,
        },
      },
      "& .list-box": {
        margin: "20px",
        padding: "0 20px",
        width: "90%",
        boxShadow: shadow,
        backgroundColor: "white",
        height: "180px",
        borderRadius: "12px",
      },
      "& .list-box:hover": {
        cursor: "pointer",
      },
      "& .description": {
        marginBottom: "18px",
      },
    },
  };

  switch (status) {
    case "loading":
      return <div>Loading</div>;
    case "error":
      return <span>Error: </span>;
    default:
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
                {searchList ? (
                  searchKeyword === "" ? (
                    <>
                      <span className="keyword">{searchKeyword}</span>전체 검색
                      결과를 보여드릴게요
                    </>
                  ) : (
                    <>
                      <span className="keyword">{searchKeyword}</span>(으)로
                      검색한 결과예요
                    </>
                  )
                ) : (
                  <span>오늘 서울의 문화를 검색해보세요</span>
                )}
              </div>
              <SearchForm width="500px" />
            </div>
            <div className="description">
              {searchList ? (
                <div>총 {searchList.length}건의 검색 결과가 나왔어요</div>
              ) : (
                <div>이런 문화생활은 어때요?</div>
              )}
            </div>
            <ul>
              {data?.map((item: any, i: number) => {
                return (
                  <div key={i} className="list-box">
                    {item.TITLE}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      );

    // return (
    //   <div
    //     css={css(style, {
    //       "& .content-container": {
    //         flexDirection: "column",
    //       },
    //       "& .content-title": {
    //         textAlign: "center",
    //       },
    //       "& .search-box": {
    //         flexDirection: "column",
    //       },
    //     })}
    //   >
    //     <div className="content-container">
    //       <div className="search-box">
    //         <div className="content-title">
    //           {searchList ? (
    //             searchKeyword === "" ? (
    //               <>
    //                 <span className="keyword">{searchKeyword}</span>전체 검색
    //                 결과를 보여드릴게요
    //               </>
    //             ) : (
    //               <>
    //                 <span className="keyword">{searchKeyword}</span>(으)로 검색한
    //                 결과예요
    //               </>
    //             )
    //           ) : (
    //             <span>오늘 서울의 문화를 검색해보세요</span>
    //           )}
    //         </div>
    //         <SearchForm width="500px" />
    //       </div>
    //       <div className="description">
    //         {searchList ? (
    //           <div>총 {searchList.length}건의 검색 결과가 나왔어요</div>
    //         ) : (
    //           <div>이런 문화생활은 어때요?</div>
    //         )}
    //       </div>
    //       {searchList
    //         ? searchList?.map((item: APIType, i: number) => (
    //             <div key={i} className="list-box">
    //               {item.TITLE}
    //             </div>
    //           ))
    //         : recommendList?.map((item: APIType, i: number) => (
    //             <div key={i} className="list-box">
    //               {item.TITLE}
    //             </div>
    //           ))}
    //     </div>
    //   </div>
    // );
  }
}

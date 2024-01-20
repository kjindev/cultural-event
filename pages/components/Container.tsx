import { useResults } from "@/util/function";
import useDataStore from "@/util/store";
import SearchBox from "./SearchBox";
import { useEffect, useState } from "react";
import getPagination from "item-pagination";
import Image from "next/image";

export default function Container() {
  const { searchList, searchKeyword } = useDataStore();
  const { status } = useResults(searchKeyword);
  const [itemList, setItemList] = useState<any>([]);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (searchList) {
      setItemList(getPagination(searchList, 8, Number(currentPage)));
      const lastPage = Math.ceil(searchList.length / 8);
      let temp = [];
      for (let i = 1; i <= lastPage; i++) {
        temp.push(i);
      }
      setPageNumbers(temp);
    }
  }, [searchList, currentPage]);

  switch (status) {
    case "loading":
      return <div>Loading</div>;
    case "error":
      return <span>Error: </span>;
    default:
      return (
        <div className="bg-white w-[900px] h-[100vh] flex flex-col justify-between">
          <div className="h-[20%]">
            {searchList ? (
              searchKeyword === "" ? (
                <>
                  <span>{searchKeyword}</span>전체 검색 결과를 보여드릴게요
                </>
              ) : (
                <>
                  <span>{searchKeyword}</span>(으)로 검색한 결과예요
                </>
              )
            ) : (
              <span>오늘 서울의 문화를 검색해보세요</span>
            )}
            <SearchBox />
            {/* {searchList ? (
              <div>총 {searchList.length}건의 검색 결과가 나왔어요</div>
            ) : (
              <div>
                이런 문화생활은 어때요?
                <div>hello</div>
              </div>
            )} */}
          </div>
          <div className="flex flex-wrap justify-center items-center h-[60%] px-3">
            {itemList?.map((item: any, i: number) => {
              return (
                <div
                  key={i}
                  className="hover:scale-105 cursor-pointer transition-all object-cover text-sm rounded-xl text-center w-[20%] h-[45%] my-5 mx-3"
                >
                  <Image
                    src={item.MAIN_IMG}
                    alt="img"
                    width={240}
                    height={200}
                    className="w-[100%] h-[100%] object-cover rounded-xl shadow-md"
                  />
                  <div className="my-1 text-xs">
                    {item.TITLE.length > 10
                      ? item.TITLE.substring(0, 11) + "..."
                      : item.TITLE}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center h-[10%]">
            {pageNumbers.map((item, i) => (
              <div
                onClick={(event: any) =>
                  setCurrentPage(event?.target.innerText)
                }
                key={i}
                className={`px-2 py-1 text-xs hover:cursor-pointer rounded-lg ${
                  i + 1 === currentPage ? "bg-sky-100" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      );
  }
}

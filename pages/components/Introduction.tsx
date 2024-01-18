import { useResults } from "@/util/function";
import useDataStore from "@/util/store";
import SearchBox from "./SearchBox";

export default function Introduction() {
  const { searchList, searchKeyword } = useDataStore();
  const { status, data } = useResults(searchKeyword);

  switch (status) {
    case "loading":
      return <div>Loading</div>;
    case "error":
      return <span>Error: </span>;
    default:
      return (
        <div className="bg-white w-[900px] p-8">
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

          {searchList ? (
            <div>총 {searchList.length}건의 검색 결과가 나왔어요</div>
          ) : (
            <div>
              이런 문화생활은 어때요?
              <div>hello</div>
            </div>
          )}

          <ul>
            {data?.map((item: any, i: number) => {
              return <div key={i}>{item.TITLE}</div>;
            })}
          </ul>
        </div>
      );
  }
}

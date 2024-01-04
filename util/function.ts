import axios from "axios";
import { useQuery } from "react-query";

interface PropsType {
  codename: string;
  title: string;
}
export const getData = async (option: PropsType) => {
  try {
    const { codename, title } = option;
    const { data } = await axios.get(
      `/api/data?codename=${codename}?title=${title}`
    );

    const list: any = [];
    const culturalEvent = data.culturalEventInfo.row;

    for (let el of culturalEvent) {
      const currentDate = new Date();
      const artEndDate = new Date(el.END_DATE.slice(0, 10));
      if (artEndDate >= currentDate) {
        list.push(el);
      }
    }

    return list;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const useResults = (keyword: any) => {
  return useQuery(
    ["keyword", keyword],
    () => getData({ codename: keyword, title: keyword }),
    {
      enabled: !!keyword,
      select: (data) => data,
    }
  );
};

export const debounce = (callback: any, duration: number) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), duration);
  };
};

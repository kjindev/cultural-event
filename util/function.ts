import axios from "axios";

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

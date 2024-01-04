// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    const getAPI = async (request: NextApiRequest) => {
      const { codename, title } = req.query;
      const API_URL = `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_API_URL_KEY}/json/culturalEventInfo/1/1000/${codename}/${title}`;
      let response;
      try {
        response = await axios.get(API_URL);
      } catch (error) {
        console.log(error);
      }
      return response;
    };
    await getAPI(req).then((response) => {
      res.json(response?.data);
    });
  }
};

export default handler;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as line from '@line/bot-sdk';

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN || '',
  channelSecret: process.env.LINE_CHANNEL_SECRET || '',
};

const client = new line.Client(config);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { latitude, longitude } = JSON.parse(req.body);

  client.broadcast({
    type: "text",
    text: `ここで実行されました！\n緯度：${latitude}\n経度：${longitude}`,
  }).then(data => console.log(data))
    .catch(e => console.log(e));

    res.status(200).json(req.body)
}

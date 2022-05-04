import type { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';

export default async (req: IncomingMessage, res: ServerResponse) => {
  const queryObject = url.parse(req.url as string, true).query;
  const search = queryObject;
  let data = { data: [{ data: ' ' }] };

  if (search) {
    const data1 = await fetch(`https://alpha-meme-maker.herokuapp.com/`, {
      method: 'GET',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('data1', data1);
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(data));
  res.end();
};

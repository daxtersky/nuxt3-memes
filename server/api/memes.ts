import type { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';

export default async (req: IncomingMessage, res: ServerResponse) => {
  const queryObject = url.parse(req.url as string, true).query;
  const search = queryObject;
  let data = { data: [{ data: ' ' }] };

  if (search) {
    data = await $fetch(`https://alpha-meme-maker.herokuapp.com/`);
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(data));
  res.end();
};

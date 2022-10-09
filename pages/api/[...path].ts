// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';


export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve) => {
    // convert cookies to header Authorization
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get('access_token');

    console.log(cookies)

    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }

    req.headers.cookie = '';

    proxy.web(req, res, {
      target: 'http://localhost:5000',
      changeOrigin: true,
      selfHandleResponse: false,
    });

    proxy.once('proxyRes', () => {
      resolve(true);
    });
  });
}

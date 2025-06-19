import { NextApiRequest, NextApiResponse } from "next";
import { createProxyMiddleware } from 'http-proxy-middleware';

const apiProxy = createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true,
  selfHandleResponse: true,
});

export default function ProxyHandler(req: NextApiRequest, res: NextApiResponse) {
    req.headers.cookie = '';
    res.status(200).json({name: 'Content-Typeapplication/json'});
}
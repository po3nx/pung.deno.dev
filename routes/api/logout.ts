import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url);
    const headers = new Headers(req.headers);
    return Response.json({
        isLogin: false,
        header:headers,
        url:url
    });
    //headers.set("location", "/login");

    //return new Response(null, { status: 302, headers });
  },
};
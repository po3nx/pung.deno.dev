import { AppProps,PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { CSS } from "gfm";
export default function App({ Component, ...pageProps }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pung.Deno.Dev</title>
        <link rel="stylesheet" href="style.css" />
        <style>${CSS} </style>
      </head>
      <body class="bg-white dark:bg-white">
      <main class={`flex flex-col min-h-screen`}>
        <HelloBar />
          <Header Component={Component} {...pageProps} />
          <Component {...pageProps} />
        
        <Footer />
        </main>
      </body>
    </html>
  );
}

function HelloBar() {
  return (
    <a
      class="bg-gray-800 text-gray-200 border-b border-green-500 p-3 text-center group"
      href="https://fresh.deno.dev"
    >
      <b>Welcome to pung.deno.dev, made with Fresh, click here to learn more</b> {" "}
      <span class="group-hover:underline">→</span>
    </a>
  );
}

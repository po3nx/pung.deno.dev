import { asset, Head } from "$fresh/runtime.ts";
import MainPage from '../islands/MainPage.tsx'
import { Fragment } from "preact";


const TITLE = "Pung.deno.dev - Made with Fresh";
const DESCRIPTION =
  "Just in time edge rendering, island based interactivity, and no configuration TypeScript support using Deno.";

function Page() {
  return (
    <Fragment>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta name="view-transition" content="same-origin" />
      </Head>
      <MainPage />
    </Fragment>
  );
}

export default Page;
import { PageProps } from "$fresh/server.ts";
import NavigationBar from "../islands/NavigationBar.tsx";

export default function Header(props: PageProps) {
  return (
    <>
      <NavigationBar {...props} />
    </>
  );
}

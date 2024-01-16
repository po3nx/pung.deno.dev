const LINKS = [
  {
    title: "Source",
    href: "https://github.com/denoland/fresh",
  },
  {
    title: "License",
    href: "https://github.com/denoland/fresh/blob/main/LICENSE",
  },
  {
    title: "Code of Conduct",
    href: "https://github.com/denoland/fresh/blob/main/CODE_OF_CONDUCT.md",
  },
];

export default function Footer() {
  return (
    <footer class="border-t-2 border-gray-200 md:h-16 flex my-8 justify-center">
        <div class="bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm">
            <div class="flex-1">
                <div class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M18 4a2 2 0 0 1 1.185 3.611c1.55 2.94 .873 6.917 -1.892 9.682c-2.765 2.765 -6.743 3.442 -9.682 1.892a2 2 0 1 1 -2.796 -2.796c-1.55 -2.94 -.873 -6.917 1.892 -9.682c2.765 -2.765 6.743 -3.442 9.682 -1.892a2 2 0 0 1 1.611 -.815z"></path>
                    </svg>
                    <div class="font-bold text-2xl">Fresh</div>
                </div>
                <a href="https://fresh.deno.dev">
                    <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge.svg" alt="Made with Fresh"/>
                </a>
            </div>
            <div class="mb-4" data-fresh-key="Documentation">
                <div class="font-bold">Documentation</div>
                <ul class="mt-2">
                    <li class="mt-2" data-fresh-key="Getting Started">
                        <a class="text-gray-500 hover:text-gray-700" href="#">Getting Started</a>
                    </li>
                    <li class="mt-2" data-fresh-key="Guide">
                        <a class="text-gray-500 hover:text-gray-700" href="#">Guide</a>
                    </li>
                    <li class="mt-2" data-fresh-key="API">
                        <a class="text-gray-500 hover:text-gray-700" href="#">API</a>
                    </li>
                </ul>
            </div>
            <div class="mb-4" data-fresh-key="Community">
                <div class="font-bold">Community</div>
                <ul class="mt-2">
                    <li class="mt-2" data-fresh-key="Forum">
                        <a class="text-gray-500 hover:text-gray-700" href="#">Forum</a>
                    </li>
                    <li class="mt-2" data-fresh-key="Discord">
                        <a class="text-gray-500 hover:text-gray-700" href="#">Discord</a>
                    </li>
                </ul>
            </div>
            <div class="text-gray-500 space-y-2">
                <div class="text-xs">
                    Find me on GitHub
                    <br/>
                </div>
                <a href="https://github.com/po3nx" class="inline-block hover:text-black" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                </a>
            </div>
        </div>
    </footer>
  );
}
import { Fragment } from "preact";
import { PageProps } from "$fresh/server.ts";
import { useState, useEffect } from "preact/hooks";
import { store } from '../store/mystore.ts';
import { buttonStyle } from "./Style.tsx";

export default function NavigationBar( props: PageProps) {
  const items = [
    {
      name: "Features",
      href: "/#features",
    },
    {
      name: "Portfolio",
      href: "/#portfolio",
    },
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];
  const services = [
    {
      name: "Services 1",
      href: "/#services1",
    },
    {
      name: "Services 2",
      href: "/#services2",
    },
    {
      name: "Services 3",
      href: "/#services3",
    },
  ];
  const [isLoggedin, setLoggedin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedin(true);
    }
  }, []);
  store.subscribe((state) => {
    console.log("state", state);
    if(state.token) {
      setLoggedin(true);
      alert('You are logged in 🚪 🗝️');
      window.location.href = '/';
    }
  });

  const doLogout = () => {
    localStorage.removeItem("token");
    setLoggedin(false);
  }
  const [isOpen, setIsOpen] = useState(false);
  const isHome = props.active == "/";
  return (
      <header class="sticky top-0 z-50 bg-white md:bg-opacity-90 backdrop-blur-sm shadow-md px-10">
        <nav className="flex items-center lg:ml-60 flex-1 md:justify-between flex-wrap py-4 px-6 lg:py-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-40">
            <Logo />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto sm: ${isOpen ? "block" : "hidden"}`}>
            <ul class="w-full gap-6 md:flex md:items-center md:w-auto">
              <li class="h-20 flex items-center group relative">
                  <a class="flex items-center text-green-900 hover:underline data-[current]:font-bold data-[ancestor]:font-bold group-hover:border-gray-200" href="#">
                      <span>Services</span>
                      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                      </svg>
                  </a>
                  <div class="hidden flex-row items-start bg-gray w-200 h-40 absolute -left-4 top-14 gap-8 px-1 sm:px-1 lg:px-1 group-hover:flex">
                      <nav>
                          <ul class="w-40 bg-gray-100 block">
                            {services.map((item) => (
                              <li>
                                <a
                                  href={item.href}
                                  class="py-2 px-3 text-green-900 block hover:underline data-[current]:font-bold data-[ancestor]:font-bold">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                      </nav>
                  </div>
              </li>
              {items.map((item) => (
              <li clas={`${isHome ? "block" : "hidden"}`}>
                <a
                  href={item.href}
                  class="md:p-4 py-2 block hover:text-purple-400">
                  {item.name}
                </a>
              </li>
            ))}
      {!isLoggedin ? (
        <div class="flex-shrink-0">
          <a href="/login" class={`${buttonStyle} ml-2 bg-pink-600`}>Login</a>
        </div>

      ) : 
        <Fragment>          
            
              <li>
              <div class="flex-shrink-0">
                <a class={`${buttonStyle}`} href="/blog/posts/new">
                  <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
                  <span>New Post</span>
                </a>
              </div>
              </li>
              <li>
                <div class="flex-shrink-0">
                  <button onClick={doLogout} class={`${buttonStyle} ml-2 bg-pink-600`}>Logout</button>
                </div>
              </li>
        </Fragment>
      }
            </ul>
          </div>
        </nav>
      </header>  
  );
}
export function Logo() {
  return (
    <a href="/" class="flex mr-3 items-center" aria-label="Top Page">
      <img src="/logo.svg" alt="Fresh logo" width={40} height={40} />
    </a>
  );
}
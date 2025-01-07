import { RemotePost } from "../types/Post.ts";
import { Fragment } from "preact";
import { render } from "gfm";

export default function Post({ post } : { post: RemotePost }) {
  const deletePost = async () => {
    const response = await fetch(`/api/post/`, {
      headers: {
        "Authorization": `${localStorage.getItem("token")}`,
      },
      method: "DELETE",
      body: JSON.stringify({
        _id: post._id
      })
    });
    const data = await response.json();
    if(data.error) {
      alert(data.error);
    } else {
      alert("Post deleted!");
      window.location.href = "/";
    }
  }
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let d = new Date(post.date);
  var datestring =  (months[d.getMonth()]) + " "+ d.getDate() +", " + d.getFullYear()
  const markup = render(post.content)
  return (
    <Fragment>
      <article class="max-w-screen-md px-4 pt-8 pb-16 md:pt-16 mx-auto">
        <h1 class="blog-header mt-6 text-4xl font-bold text-gray-800 sm:text-6xl">{post.title}</h1>
        <div class="mt-8 text-gray-500 text-lg">
          <p class="flex gap-2 items-center">
          <time dateTime={datestring}>{datestring}</time> 
            <a href="/feed" class="hover:text-gray-700" title="Atom Feed">
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
                <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"></path>
              </svg>
            </a>
          </p>
          <ul class="flex flex-wrap gap-2 gap-x-4 mt-4 text-sm">
            <li class="whitespace-nowrap">
              <a class="hover:underline flex items-center gap-1" href="https://github.com/po3nx">
                <img src="https://github.com/po3nx.png" class="h-[1.75em] rounded-full"/>
                <span>{post.author}</span>
              </a>
            </li>
          </ul>
          <div class="flow-root mt-8 text-base text-gray-500">
            <p class="-m-1 flex flex-row">
              <a class="px-3 py-1 rounded-lg mx-1 border-1 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-700" href="/blog" data-ancestor="true" aria-current="true">Blog</a>
            </p>
          </div>
        </div>
        <hr class="my-8"/>
        <div class="markdown-body" dangerouslySetInnerHTML={{__html: markup}} />
      </article>
      <a href={`/blog/posts/${post._id}/edit`} class="font-bold py-3 px-3 rounded mr-2 ml-2 hover:underline hover:bg-purple-200">
        Edit
      </a>
      <button onClick={deletePost} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete
      </button>
    </Fragment>
  )
}

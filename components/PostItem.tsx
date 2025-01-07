import { IS_BROWSER } from "$fresh/runtime.ts";
import { RemotePost } from "../types/Post.ts";

export default function PostItem({ post, id } : { post: RemotePost, id: string }) {
  const dateStr = post.date['@ts'];
  let d = new Date(dateStr);
  var datestring = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear()
  return (
    <div class="py-16 grid sm:grid-cols-4 gap-4">
      <div class="w-full text-gray-500">
        <time dateTime={datestring}>{datestring}</time> by {post.author}
        <div class="flow-root mt-4 text-sm text-gray-700">
          <div class="flex flex-wrap gap-2">
            <a class="hover:text-blue-400 hover:underline border py-1 px-2 border-gray-300 rounded-md" href="/blog" data-current="true" aria-current="page">Blog</a>
          </div>
        </div>
      </div>
      <a class="sm:col-span-3 sm:pl-8 sm:border-l sm:border-gray-300 flex flex-col gap-4" href={`/blog/posts/${id}`}>
        <h3 class="text-2xl text-gray-800 sm:text-3xl font-bold leading-tight tracking-tight">{post.title}</h3>
        <div class="text-gray-800 italic">
          {post.summary}
        </div>
        <div class="text-base font-medium leading-6">
          <a class="text-primary-500 hover:text-primary-600 " aria-label="Read more: &quot;Release of Tailwind Nextjs Starter Blog v2.0&quot;" href={`/blog/posts/${id}`}>Read more →</a>
        </div>
      </a>
    </div>
  )
}

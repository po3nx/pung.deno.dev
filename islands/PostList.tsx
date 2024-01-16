import { useState, useEffect } from "preact/hooks";
import PostItem from "../components/PostItem.tsx";
import { RemotePost } from "../types/Post.ts";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/post");
        const remotePosts = await response.json();
        setPosts(remotePosts.data);
      } catch (error) {
        console.error(error);
        alert("Something went wrong!");
      }
    }
    fetchPosts();
  },[]);


  return (
    <div class="max-w-screen-md px-4 pt-16 mx-auto">
       <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Blog</h2>
       <div class="mt-8">
        {
          posts.map((post: RemotePost) => (
            <PostItem post={post} id={post._id} />
          ))  
        }
       </div>
    </div>
  )
}
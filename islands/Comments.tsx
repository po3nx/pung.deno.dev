import { useState, useEffect } from "preact/hooks";
import { inputStyle } from "./PostForm.tsx";
import { buttonStyle } from "./Style.tsx";
import { RemoteComment } from "../types/Comment.ts";

export default function Comments({ postId, postComments } : { postId: string, postComments: RemoteComment[] }) {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<RemoteComment[]>([]);

  useEffect(() => {
    setComments(postComments);
  }, [postComments]);

  const saveComment = async () => {
    const response = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Authorization": localStorage.getItem("token") || "",
      },
      body: JSON.stringify({ content, postId })
    }); 
    const data = await response.json();
    if(data.error) {
      alert('Login to post a comment!');
    } else {
      alert("Comment created!");
      setContent("");
      setComments([...comments, data.data]);
    }
  };

  const deleteComment = async (id: string) => {
    console.log(id);
    const response = await fetch("/api/comment", {
      method: "DELETE",
      headers: {
        "Authorization": localStorage.getItem("token") || "",
      },
      body: JSON.stringify({ _id: id })
    });
    const data = await response.json();
    if(data.error) {
      alert(data.error);
    } else {
      alert("Comment deleted!");
      setComments(comments.filter(comment => comment._id !== id));
    }
  };

  return (
    <div class="p-5 w-full mx-auto">
      <div class="mt-1 flex p-5">
        <input 
          class={`${inputStyle} w-2/5`} 
          placeholder="Make a comment"
          onChange={(e: any) => setContent(e.target.value)}
          value={content}
        />
        <button 
          onClick={saveComment}
          class={`${buttonStyle} ml-1`}
        >
          Save
        </button>
      </div>
      <div class="p-5">
      {
        comments.map((comment) => (
          <div class="p-3 flex">
            <div class="text-md pl-4">{comment.content} --- by</div>
            <div class="text-md pl-4 font-bold">{comment.author}</div>
            <button onClick={() => deleteComment(comment._id)} class="ml-2 pl-1 pr-1 rounded-md border bg-red-100">Delete</button>
          </div>
        ))
        }
      </div>
    </div>
  )
}
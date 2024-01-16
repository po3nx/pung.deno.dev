import { useSignal } from "@preact/signals";
import { Handlers, PageProps } from "$fresh/server.ts";
import { faunaClient, q } from "../../../../utils/db.ts";
import Comments from '../../../../islands/Comments.tsx';
import { RemoteComment } from "../../../../types/Comment.ts";
import Post from "../../../../components/Post.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { id } = ctx.params;

    try {
      const post = await faunaClient.query(
        q.Get(q.Ref(q.Collection('Post'), id))
      );
      // Comments Associated with Post
      const comments = await faunaClient.query(
        q.Map(
          q.Paginate(
            q.Match(q.FaunaIndex('comments_by_post'), id)
          ),
          q.Lambda('X', q.Get(q.Var('X')))
        )
      );
      const postComments = [] as RemoteComment[];
      comments.data.map((comment: any) => {
        postComments.push({
          _id: comment.ref.id,
          ...comment.data,
        });
      })
      return ctx.render({
        _id: post.ref.id,
        ...post.data,
        comments: postComments,
      });
    } catch (error) {
      return Response.json({
        error: error.message,
      });
    }
  },
};

export default function PostPage(props: PageProps) {

  if(!props.data) { 
    return <div>Loading...</div>
  }
  return (
    <div class="max-w-screen-md px-4 pt-16 mx-auto" >
      <Post post={props.data} />
      <Comments postId={props.data._id} postComments={props.data.comments}/>
    </div>
  )
}

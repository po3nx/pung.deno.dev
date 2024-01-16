export type RemotePost = {
  _id: string;
  title: string;
  content: string;
  summary:string;
  markup:string;
  date:Date;
  author?: string;
}
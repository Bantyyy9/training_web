import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  const { userId, postId } = useParams();
  return (
    <div className="p-5">
      <h1>Title of Post</h1>
      <p>body of the post</p>

      <div>list of comments</div>
    </div>
  );
};

export default SinglePostPage;

//*get single post by id
//'https://jsonplaceholder.typicode.com/posts/postId'

//* get comments for a post
//'https://jsonplaceholder.typicode.com/posts/postId/comments'

//* guide
//https://jsonplaceholder.typicode.com/guide/

import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import Loading from "./Loading";
import Post from "./Post";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchListPosts = async () => {
      try {
        const response = await fetch(BASE_URL + "post", {
          headers: {
            "app-id": import.meta.env.VITE_APP_ID,
          },
        });
        if (response.ok) {
          const resData = await response.json();

          setPosts(resData.data);
        } else {
          throw response;
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListPosts();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {loading ? (
        <div className="md:col-span-2 lg:col-span-3">
          <Loading />
        </div>
      ) : (
        posts?.map((post) => <Post key={post.id} {...post} />)
      )}
    </div>
  );
};

export default PostsList;

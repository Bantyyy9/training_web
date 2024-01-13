import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import User from "../components/User";
import Tag from "../components/Tag";

const SinglePostPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchListPost = async () => {
      try {
        const response = await fetch(BASE_URL + "post/" + id, {
          headers: {
            "app-id": import.meta.env.VITE_APP_ID,
          },
        });
        if (response.ok) {
          const resData = await response.json();
          console.log(resData);
          setPost(resData);
        } else {
          throw response;
        }
      } catch (error) {
        console.log(error);
        // setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListPost();
  }, [id]);
  console.log(post);
  return (
    <div className="max-w-2xl mx-auto lg:p-0 w-full">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-5">
          <div className="w-full overflow-hidden">
            <img
              className="object-cover w-full"
              src={post?.image}
              alt={`${post?.firstName} ${post?.lastName}`}
            />
          </div>
          <div className="flex items-center justify-between">
            <p>{post.likes}</p>
            <User {...post.owner} />
          </div>
          <p className="p-5 md:px-0">{post.text}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((text) => (
              <Tag text={text} key={text} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePostPage;

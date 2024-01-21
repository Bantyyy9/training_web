
import PostsList from "../components/PostsList";
import UploadModal from "../components/UploadModal";

const Homepage = () => {
  return (
    <div className="w-full max-w-2xl p-5 mx-auto lg:p-0">
      <UploadModal />
      <PostsList />
    </div>
  );
};

export default Homepage;

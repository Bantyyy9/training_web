import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        index: true,
        element: (
          <h1 className="flex h-screen items-center justify-center text-center text-3xl font-fold italic text-blue-800">
            No User selected
          </h1>
        ),
      },
      {
        // path: "user/:userId/posts",
        path: ":userId/posts",
        element: <PostsPage />,
        children: [
          {
            index: true,
            element: (
              <h1 className="flex h-screen items-center justify-center text-center text-3xl font-fold italic text-blue-800">
                No Post selected
              </h1>
            ),
          },
          {
            path: ":postId",
            element: <SinglePostPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

// / -> homepage

// /user/:userId/posts

// /user/:userId/posts/:postId

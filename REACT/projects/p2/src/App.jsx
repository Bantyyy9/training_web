import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RootLayout from "./components/RootLayout";
import SinglePostPage from "./pages/SinglePostPage";
import UsersPage from "./pages/UsersPage";
import SingleUserPosts from "./pages/SingleUserPosts";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/post/:id",
        element: <SinglePostPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/user/:id/posts",
        element: <SingleUserPosts />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

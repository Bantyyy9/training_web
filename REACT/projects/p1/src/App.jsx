// 1. install react-router-dom
//2. import all the necessary functionality from react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
import HooksInReact from "./Hooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blogs",
    element: <BlogsPage />,
  },
  {
    path: "/blogs/:id",
    element: <BlogsPage />,
  },
  // {
  //   path: "/home/:user" //   /home/banty   /home/rasta   /home/an
  // },
  // {
  //   path: "/:user" //   /banty /rasta /home /school  /user
  // },
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        index: true,
        element: (
          <div>
            <h1 style={{ color: "var(--Orange)" }}>Auth</h1>
            <div>
              <Link to="/auth/login">Login Here</Link> <br />
              <Link to="/auth/signup">Signup Here</Link>
            </div>
          </div>
        ),
      },
      {
        // index: true,
        path: "login", //    /auth/login
        element: <LoginPage />,
      },
      {
        path: "signup", //    /auth/signup
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "/test/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },

  {
    path: "/dynamic/:user/:area", //  /dynamic/rasta/banty
    element: <DynamicPage />,
  },

  {
    path: "/hooks",
    element: <HooksInReact />,
  },

  {
    path: "*",
    element: <h1>Invalid Route: 404</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

function RoutingClass() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Routing in React</h2>
      <ol>
        <li>Page Routing</li>
        <li>Nested Routing</li>
        <li>Dynamic Routing</li>
      </ol>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Homepage of the site</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde
        veniam facilis eum placeat earum nihil libero deserunt velit sapiente.
      </p>
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          React Training path part
        </h1>
        <RoutingClass />

        <div className="links">
          <a href="/blogs">Blogs page</a>
          <Link to="/blogs">Blogs page</Link>
          <Link to="/auth">Auth</Link>
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/signup">Signup</Link>
          <Link to="/signup">Signup 2</Link>
          <Link to="/hooks">Hooks in React</Link>
        </div>
      </div>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="auth-page">
      <h1>Login Page</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
      <div className="links">
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/signup">Signup</Link>
        <Link to="/">Homepage</Link>
      </div>
    </div>
  );
}

function SignupPage() {
  return (
    <div className="auth-page">
      <h1>Signup Page</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="password" />
        <button>Signup</button>
      </form>
      <div className="links">
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/signup">Signup</Link>
        <Link to="/">Homepage</Link>
      </div>
    </div>
  );
}

function AuthPage() {
  return (
    <div className="auth-layout">
      <div className="left">
        <h1>Auth Layout</h1>

        <footer>Footer of the auth layout</footer>
      </div>
      <div className="right">
        <Outlet /> {/* placeholder */}
      </div>
    </div>
  );
}

function BlogsPage() {
  const params = useParams();

  console.log(params);

  const blogs = {
    "blog-1": "AI in Diagnostics: Explore how machine learning algorith",
    "blog-2":
      "Drug Discovery: Learn how AI accelerates drug development by predicting potential compounds and optimizing clinical trials.",
    "blog-3":
      "Patient Care: Discover chatbots and virtual assistants that enhance patient communication and streamline administrative tasks.",
    "blog-4":
      "Bias and Fairness: Discuss the importance of addressing bias in AI algorithms to prevent discriminatory outcomes.",
  };

  return (
    <div>
      <h1>Blogs Page</h1>

      <div>
        <h2>Blog Title for {params.id} </h2>
        <p>{blogs[params.id] || "No Blog data"}</p>
        <div className="links">
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/signup">Signup</Link>
          <Link to="/">Homepage</Link>
          <Link to="/blogs/blog-1">Blog 1</Link>
          <Link to="/blogs/blog-2">Blog 2</Link>
          <Link to="/blogs/blog-3">Blog 3</Link>
          <Link to="/blogs/blog-4">Blog 4</Link>
        </div>
      </div>
    </div>
  );
}

function DynamicPage() {
  const params = useParams();
  console.log(params);
  return (
    <h1>
      Dynamic Page
      <br />
      {params.area?.toUpperCase()}
      <br />
      {params.user?.toUpperCase()}
    </h1>
  );
}

// function RenderList() {
//   // hooks -> useState, useEffect, useReducer
//   const [user,setUser] = useState("")
// // [banty, setBanty]
// // [auth, setAuth]
// //   [variable,setVariable]

//   const list = ["Rasta", "Banty", "Precious", "Fuad"];

//   function handleClick(name) {
//       // user = name
//       setUser(name)
//       console.log(user);
//   }

//   return (
//     <div>
//       <h1 style={{
//         textAlign: "center"
//       }}>{user}</h1>
//       {list.map((user, index) => (
//         <ListItem
//           key={index}
//           id={index}
//           text={user}
//           handleClick={()=>{handleClick(user)}}
//         />
//       ))}
//     </div>
//   );
// }

// function Others(){
//    // const [rating, setRating] = useState("");
//   // const [mode, setMode] = useState("back");
//   // if (mode === "front") {
//   //   return <FrontCard />;
//   // } else {
//   //   return <BackCard />;
//   // }
//   // return <RenderList />;
//   // const list = [
//   //   {
//   //     fullName: "Orekelewa",
//   //     job: "Affiliate Marketer"
//   //   },
//   //   {
//   //     fullName: "Banty",
//   //     job: "Developer",
//   //   },
//   //   {
//   //     fullName: "Rasta",
//   //     job: "Teacher",
//   //   },
//   //   {
//   //     fullName: "Banty",
//   //     job: "Footballer"
//   //   }
//   // ];

//   // return (
//   //   <div>
//   //     {/* <UserInfo fullName="Banty" job="Developer"/>
//   //     <UserInfo fullName="Rasta" job="TEacher"/> */}
//   //     {
//   //       // [1,3,5,6] -> [1,9,25,36]
//   //       list.map((user,index) => {
//   //        return  <UserInfo key={index} fullName={user.fullName} job={user.job} />;
//   //       })
//   //     }
//   //   </div>
//   // );
//   // return mode === "front" ? (
//   //   <FrontCard rating={rating} setRating={setRating} setMode={setMode} />
//   // ) : (
//   //   <BackCard rating={rating} setMode={setMode} />
//   // );
//   // const bantyName = "My Name";

//   //valid expresion
//   //-> basic type: number boolean string
//   //-> null undefined true false
//   //-> array of values [5,6,7] => 567

//   // const username = "Banty";

//   // if (username === "Admin") {
//   //   return <h1>Hello Admin</h1>;
//   // } else {
//   //   return <h1>Hello {username}, you're not an admin user</h1>;
//   // }

//   // return (
//   //   <h1>
//   //     Hello {username} {username === "Admin" ? "" : ", you're not an admin user"}
//   //   </h1>
//   // );

//   // return (
//   //   <div id="banty">
//   //     {/* <Button href="https://google.com" imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" text="Google">

//   //     </Button>
//   //     <Button href="https://twitter.com" imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" text="Twitter">

//   //     </Button> */}
//   //     {/* <Card color="red">
//   //       <h1>Inside Card component</h1>
//   //       <p>
//   //         Banty Lorem ipsum dolor sit amet consectetur adipisicing elit.
//   //         Deleniti, impedit?
//   //       </p>
//   //     </Card>
//   //     <Card color="blue">
//   //       <h1>Inside Card component</h1>
//   //       <p>
//   //         Banty Lorem ipsum dolor sit amet consectetur adipisicing elit.
//   //         Deleniti, impedit?
//   //       </p>
//   //     </Card>
//   //     <Banty id="banty" text="My First Props" />
//   //     <Banty text="my name" /> */}
//   //     {/* <ol className="te" type="a">
//   //       <li>Rasta</li>
//   //       <li>Banty true {"true"}</li>
//   //       <li>
//   //         {null} {""} {undefined} {true} {false}
//   //       </li>
//   //       <li>
//   //         Array {[1,2,6, "Banty", 7]}
//   //         </li>.
//   //     </ol>
//   //     <ol type="1">
//   //       <li>
//   //         {bantyName}
//   //       </li>
//   //       <li>Rasta 2+2</li>
//   //       <li>Banty {2 + 2}</li>
//   //       <li>{"test".toUpperCase()}</li>
//   //     </ol> */}
//   //     {/* <Banty />
//   //     <Banty />
//   //     <Banty />
//   //     <Banty /> */}
//   //   </div>
//   //   // <Banty></Banty>
//   // );
// }

// function ListItem(props) {
//   return (
//     <div className="list-item">
//       <input type="radio" name="question" id={`radio-${props.id}`} />
//       <label onClick={props.handleClick} htmlFor={`radio-${props.id}`}>
//         {props.text}
//       </label>
//     </div>
//   );
// }

// function UserInfo(props) {
//   return (
//     <div>
//       <h1>{props.fullName}</h1>
//       <p>{props.job}</p>
//     </div>
//   );
// }

// function Banty(props) {
//   console.log(props);
//   return <h1>First Component Banty {props.text}</h1>;
// }

// function Card(props) {
//   console.log(props.children);
//   return (
//     <div
//       className="card"
//       style={{
//         background: props.color,
//       }}
//     >
//       {props.children}
//     </div>
//   );
// }

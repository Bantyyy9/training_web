import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./myStyle.css";

import styles from "./mystyle2.module.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import Blogs from "./pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blog/:blogId",
    element: <Blog />,
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/banty",
        element: <h1>Banty</h1>,
      },
      {
        path: "/dashboard/rasta",
        element: <h1>RastaXarm</h1>,
      },
      {
        path: "/dashboard/:username/settings/:setting",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  // const [count, setCount] = useState(0);

  return (
    <RouterProvider router={router} />

    // <>
    //   <h1 className={styles.highlight}>
    //     Welcome to React <img className="spin" src={reactLogo} />{" "}
    //     <img className="jump-a" src={viteLogo} alt="" />
    //   </h1>
    //   <StyledComponent />
    //   <p>testing</p>
    //   <Lists />
    //   <Testing call="08056782345" name="Rasta" color="orange" />
    //   <Testing call="07056785678" name="Banty" />
    //   <Lists>
    //     <li>James</li>
    //     <li>Fuad</li>
    //   </Lists>

    //   <Creation title="Arcade" />
    //   <Creation title="Soccer Team VR" color="orange" hasBg />
    //   <Creation title="The Grid" color="blue" hasBg />
    //   <Creation title="From Up Above VR" hasBg />
    // </>
  );
}

export default App;

//class component
class Testing extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <>
        <p>From Class Component {this.state.counter}</p>
        <ul
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          <li>Testing {this.props.call}</li>
          <li>Testing 2 {this.props.name}</li>
          <li>Testing 3 {this.props.color}</li>
        </ul>
      </>
    );
  }
}

//functional component
function Lists({ children }) {
  // console.log(props);

  const [value, setter] = useState("my name");
  const [user, setUser] = useState({
    name: "Rasta",
    level: 2,
    scores: [58, 90, 98, 78, 67],
  });

  const names = ["Banty", "Oyin", "Eniola"];
  console.log("here...", user.name);

  const print = (e) => {
    // console.log(e);
    // console.log(e.currentTarget, e.target);
    console.log("before change", user.name);
    const n = Math.trunc(Math.random() * names.length);
    const _name = names[n];
    // user.name = _name;
    setUser({ ...user, name: _name });
    console.log("after change", user.name);
    // value = _name;
    // setter(_name);
  };

  return (
    <ul onClick={print} className="container">
      <li>{user.name}</li>
      <li>Rasta {value}</li>
      <li>
        Banty {user.name} - {user.level}
      </li>
      <li>Abbas {user.scores}</li>
      {children}
    </ul>
  );
}

const Creation = (props) => {
  // console.log(props);
  const { title, hasBg, color = "red", ...rest } = props;

  return (
    <div>
      <h3
        style={
          hasBg && {
            backgroundColor: `color-mix(in srgb, ${color} 30%, transparent)`,
            color,
          }
        }
      >
        {title}
      </h3>
    </div>
  );
};

const StyledComponent = () => {
  return (
    <div
      style={{}}
      className={styles.container}
      // style={{ backgroundColor: "blue", color: "red" }}
    >
      <h1>
        How to Style in React {2 + 2}
        {0}
        {false}
        {true}
        {undefined}
        {null}K
      </h1>
    </div>
  );
};

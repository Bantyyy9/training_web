// import { Component } from "react";
import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HooksInReact = () => {
  return (
    <>
      <Examples />
      <div className="hooks">
        <h1>What is a Hook?</h1>
        <p>
          Hooks allow us to <b>hook</b> into React features such as state and
          lifecycle methods.
        </p>
        <p>
          Before React 16.8, Class components were the only way to track state
          and lifecycle on a React component. Function components were
          considered {"state-less"}.
        </p>

        <p>
          With the addition of Hooks, Function components are now almost
          equivalent to Class components.
        </p>

        <h1>Hook Rules</h1>
        <p>There are 3 rules for hooks:</p>
        <ol>
          <li>Hooks can only be called inside React function components.</li>
          <li>Hooks can only be called at the top level of a component.</li>
          <li> Hooks cannot be conditional</li>
        </ol>

        <h1>Built-in Hooks</h1>
        <ol>
          <li>useState</li>
          <li>useEffect</li>
          <li>userRef</li>
          <li>userReducer</li>
          <li>userContext</li>
          <li>etc...</li>
        </ol>

        <h1>Custom Hooks</h1>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
      </div>
    </>
  );
};

export default HooksInReact;

function Examples() {
  return (
    <div className="">
      {/* <UseEffectHook /> */}
      {/* <UseStateHook /> */}
    </div>
  );
}

function UseStateHook() {
  //   let action = "None";
  const [counter, setCounter] = useState(0);
  const [action, setAction] = useState("None");

  const increment = () => {
    setCounter(counter + 1);
    setAction("increment");
  };

  const decrement = () => {
    setCounter(counter - 1);
    setAction("decrement");
  };
  return (
    <>
      <span>{action}</span>
      <h1>{counter}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //   console.log("Before Effect");
  // useEffect(callback)
  // useEffect(() => {
  //   console.log("UseEffectHook called");
  // });
  //   console.log("After Effect");
  //* useEffect(callback,[deps])
  useEffect(() => {
    console.log("UseEffectHook called once");
  }, []);
  //   useEffect(() => {
  //     console.log("UseEffectHook called once");
  //   }, [name]);

  //   useEffect(() => {
  //     console.log("Component mount");
  //     return () => {
  //       console.log("Component will unmount");
  //     }; //will get called anything the component will be destroyed
  //   },[]);

  const increment = () => setCount(count + 1);

  const changeName = () => {
    const val = Math.random() * 4;
    console.log(val);
    setName(val);
  };
  // const loggedIn = true
  // if(loggedIn){
  // }
  return (
    <div>
      <h1 onClick={increment}>UseEffect Hook Example {count}</h1>
      <p>{count > 5 ? "above" : "below"}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

class ExampleForClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    return { color: props.color };
  }

  componentDidMount() {
    console.log("Mounted");
  }
  componentWillUnmount() {
    console.log("Leaving...");
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  render() {
    return (
      <div>
        <h2>I am a {this.state.color} Car!</h2>;
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

import { useState } from "react";
import { useParams } from "react-router-dom";

function useTesting() {
  const [count, setCount] = useState(0);

  const update = (c = 0) => {
    setCount(c);
  };

  return {
    count,
    update,
  };
}

export default useTesting;

// dashboard/{username}/settings/{type}

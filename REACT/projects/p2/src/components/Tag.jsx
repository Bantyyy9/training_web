import { useState } from "react";

const Tag = ({ text }) => {
  const [randomNumber, setRandomNumber] = useState(
    Math.trunc(Math.random() * 361)
  );

  return (
    <p
      style={{
        color: `hsl(${randomNumber},50%, 80%)`,
        background: `hsla(${randomNumber},50%, 20%,.6)`,
        backdropFilter: "blur(3px)",
      }}
      className="line-clamp-1 px-2 py-1 rounded-sm capitalize"
    >
      {text}
    </p>
  );
};

export default Tag;

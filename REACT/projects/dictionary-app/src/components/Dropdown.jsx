import React, { useState } from "react";

const items = ["Sans Serif", "Serif", "Mono"];
const bodyClass = ["sans-serif", "serif", "mono"];
const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedFont, setSelected] = useState(items[0]);

  const toggle = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    // setOpen((prev)=>!prev)
  };

  const changeFont = (font, index) => {
    setSelected(font);
    // document.body.classList.remove(bodyClass[0])
    // document.body.classList.remove(bodyClass[1])
    // document.body.classList.remove(bodyClass[2])
    bodyClass.forEach((item) => document.body.classList.remove(item));
    document.body.classList.add(bodyClass[index]);

    toggle();
  };
  return (
    <div className="relative">
      <button className="flex items-center gap-4" onClick={toggle}>
        <span className="font-bold">{selectedFont}</span>
        <img
          className={`${open ? "" : "-scale-y-100"}`}
          src="/images/icon-chevron.svg"
          alt="Arrow"
        />
      </button>
      <ul
        className={`absolute right-0 ${
          open ? "top-[120%]" : "top-[-30rem]"
        } bg-white p-6 dark:bg-appBlack2 rounded-2xl min-w-[10rem] transition-all duration-500 flex flex-col gap-4 shadow-sLight dark:shadow-sDark`}
      >
        {items.map((item, index) => (
          <li
            onClick={() => changeFont(item, index)}
            key={item}
            className={`cursor-pointer hover:text-appPurple transition-colors ${
              selectedFont === item ? "text-appPurple" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

import React, { useState, useEffect } from "react";

const Dropdown = ({ options, selected, setSelected, label }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (e.target === e.currentTarget) {
        setOpen(false);
      }
      // console.log("body");
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.addEventListener("click", onBodyClick, { capture: true });
    };
  }, []);

  const renderedList = options.map((item) => {
    if (item === selected) {
      return null;
    }
    return (
      <div
        className="item"
        // style={{ backgroundColor: `${item.value}` }}
        key={item.value}
        onClick={() => {
          // console.log("item");
          setSelected(item);
        }}
      >
        {item.label}
      </div>
    );
  });

  return (
    <>
      <div className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div
            onClick={() => {
              setOpen(!open);
              // console.log("dropdown");
              // console.log(open);
            }}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedList}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 style={{ color: `${selected.value}` }}>
        Selected color is {selected.value}
      </h1>
    </>
  );
};

export default Dropdown;

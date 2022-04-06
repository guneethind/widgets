import React, { useState } from "react";

//import "./accordion.css";
let flag = 0;
const Accordion = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemClick = (index) => {
    // setTimeout(() => {
    if (index == selectedItem) {
      setSelectedItem(null);
      return;
    }
    setSelectedItem(index);
    // console.log(index);
    // }, 500);
    // console.log(item);
  };

  const renderedItems = props.items.map((item, index) => {
    // console.log(item);

    const active = index == selectedItem ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className="itemContainer"
          onClick={() => {
            // flag = !flag;
            // console.log(flag);
            onItemClick(index);
            // console.log(item);
          }}
        >
          <div className={`title ${active}`}>
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <p className={`${active} content`}>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="ui styled accordion">{renderedItems}</div>
    </>
  );
};

export default Accordion;

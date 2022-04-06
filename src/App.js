import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accordion from "./components/accordion/Accordion";
import Dropdown from "./components/dropdown/Dropdown";
import Search from "./components/search/Search";
import Topbar from "./components/topbar/Topbar";

const items = [
  {
    title: "hELLO",
    content: "123",
  },
  {
    title: "qwe",
    content: "qwerty",
  },
  {
    title: "asd",
    content: "asdfgh",
  },
  {
    title: "zxc",
    content: "zxcvbn",
  },
];

const options = [
  {
    label: "The color of red",
    value: "red",
  },
  {
    label: "The color of green",
    value: "green",
  },
  {
    label: "Shade of blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/accordion" element={<Accordion items={items} />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/dropdown"
          element={
            <Dropdown
              label="Select a color"
              options={options}
              selected={selected}
              setSelected={setSelected}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

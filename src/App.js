import React, { useState } from "react";

import Accordion from "./components/Accordion";
// import SearchSection from './components/Search';
import SearchSection from "./components/SearchComponent";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is react?",
    content: "Some Answer",
  },
  {
    title: "Some ques",
    content: "Print Some ans",
  },
  {
    title: "Something",
    content: "Some ans",
  },
];
const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState({
    label: "Red",
    value: "red",
  });
  const [dropdownDisplay, setDropdownDisplay] = useState(true);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <SearchSection />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label={"Select a color"}
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;

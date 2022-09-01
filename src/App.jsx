
import React from "react";
import { useState } from "react";
import useDebounce from "./components/hooks/useDebounce";

import useInput from "./components/hooks/useInput";

import Hover from "./components/Hover";
import List from "./components/List";
import Request from "./components/Request";

const App = () => {
  const username = useInput("");
  const password = useInput("");
  const debauncedCallback = useDebounce(searchTodo, 3000);
  const [value, setValue] = useState("");
 
  const onChange = (e) => {
    setValue(e.target.value);
    debauncedCallback(e.target.value);
  };

  function searchTodo(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query` + query)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }

  

  return (
    <div>
      <h3>useInput</h3>
      <input {...username} type="text" placeholder="User" />
      <input {...password} type="text" placeholder="Password" />
      <h3>useHover</h3>
      <Hover />
      <h3>useScroll</h3>
      <List />
      <h3>useDebounce</h3>
      <input
        type="text"
        placeholder="поиск"
        value={value}
        onChange={onChange}
      />
      <h3>Use Request</h3>
      <Request/>
    </div>
  );
};

export default App;

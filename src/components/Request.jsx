import React from "react";
import axios from "axios";
import useRequest from "./hooks/useRequest";

const Request = () => {
  const [todos, loading, error] = useRequest(fetchTodos);
  function fetchTodos() {
    console.log(
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.data)
    );
    return axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
  }

  if (loading) {
    return <h1>"Идет загрузка..."</h1>;
  }

  if (error) {
    return <h1>"Произошла ошибка"</h1>;
  }

  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              padding: 15,
              marginTop: 30,
              backgroud: "grey",
              border: "2px solid black",
            }}
          >
            {todo.id}. {todo.title}
          </div>
        ))}
    </div>
  );
};

export default Request;

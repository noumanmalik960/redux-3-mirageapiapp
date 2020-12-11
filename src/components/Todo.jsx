import React, { useState } from "react";

const baseUrl = "fakeapi";

export const Todo = () => {
  let [data, setData] = useState([]);

  // this is for post request for mirage mock server api
  const addTodoHandler = () => {
    fetch(`/${baseUrl}/addTodo`, {
      method: "POST",
      body: [
        { id: 1234, text: "This is second entry" },
        { id: 3411, text: "This is third entry" },
      ],
    })
      .then((res) => {
        console.log("success: ", res);
      })
      .catch((error) => {
        console.log("error caught in addTodo: ", error);
      });
  };

  const getDataHandler = () => {
    fetch(`/${baseUrl}/getTodos`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.todos);
        console.log("get data: ", data);
      });
  };

  return (
    <div>
      Halo from Todo component
      <button onClick={addTodoHandler}>add</button>
      <button onClick={getDataHandler}>get Todos</button>
      {JSON.stringify(data)}
    </div>
  );
};

import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import im from '../jam.png';
import img from "../trio.png"
// runtime query


const GET_TODOS = gql`
{
    todos {
        task,
        id,
        status
    }
}
`;
const ADD_TODO = gql`
    mutation addTodo($task: String!){
        addTodo(task: $task){
            task
        }
    }
`;
const DEL_TODO = gql`
    mutation delTodo($id: String!){
        delTodo(id: $id){
            task
        }
    }
`;
const UPDATE_TODO = gql`
    mutation updateTodo($id: String!){
        updateTodo(id: $id){
            task
        }
    }
`;


export default function Home() {
  let inputText;

  const [addTodo] = useMutation(ADD_TODO);
  const [delTodo] = useMutation(DEL_TODO);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const addTask = () => {
    addTodo({
      variables: {
        task: inputText.value
      },
      refetchQueries: [{ query: GET_TODOS }]
    })
    console.log("done")
    inputText.value = "";
  }
  const delTask = (id) => {
    delTodo({
      variables: {
        id: id
      },
      refetchQueries: [{ query: GET_TODOS }]
    })
  }
  const updateTask = (id) => {
    updateTodo({
      variables: {
        id: id
      },
      refetchQueries: [{ query: GET_TODOS }]
    })

  }


  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading)
    return <h2>Loading..</h2>

  if (error) {
    // console.log(error)
    return <h2>Error</h2>
  }
  console.log(data, "data")

  return (
    <div className="container">
      <div style={{ display: "flex", width: "100vw", justifyContent: "center" }}>
        <img src={im} alt="main" style={{ width: "300px" }} />

      </div>
      {/* <img src={img} style={{ width: "300px" }} /> */}
      <div style={{ display: "flex", width: "100vw", justifyContent: "center" }} >
        <h1> Add Task </h1><br />

      </div > <div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
        <input style={{ padding: "10px", margin: "0 10px" }} type="text" ref={node => {
          inputText = node;
        }} />
        <button onClick={addTask}>Add Task</button>

      </div>
      <br /> <br />

      <h3 style={{ textAlign: "center" }}>My TODO LIST</h3>
      <div style={{ width: "100vw", display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
        {data && data.todos.map(todo => {
          console.log(todo)
          return <div key={todo.id}>
            <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
              <p> {todo.task} </p>


            </div>

            <div >
              <button style={{ padding: "10px", margin: "10px" }} onClick={() => delTask(todo.id)}>Remove</button>
              <button style={{ padding: "10px", margin: "10px" }} disabled={todo.status} onClick={() => updateTask(todo.id)}>{todo.status ? "done" : "pending"}</button>
            </div>

          </div>
        })}
      </div>




    </div>
  );
}

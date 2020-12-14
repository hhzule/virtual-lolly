import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';

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
    console.log("done")
    inputText.value = "";
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
      <label>
        <h1> Add Task </h1>
        <input type="text" ref={node => {
          inputText = node;
        }} />
      </label>
      <button onClick={addTask}>Add Task</button>

      <br /> <br />

      <h3>My TODO LIST</h3>


      {data.todos.map(todo => {
        console.log(todo)
        return <div key={todo.id}>

          <p> {todo.task} </p>

          <p>{todo.status ? "done" : "pending"}</p>
          <button onClick={() => delTask(todo.id)}>del</button>
        </div>
      })}


    </div>
  );
}

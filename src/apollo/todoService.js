import {gql} from "@apollo/client";

export const ALL_TODOS = gql`
    query AllTodos {
      todos: allTodos {
        id,
        title,
        completed
      }
    }
`
export const ADD_TODO = gql`
    mutation createTodo($title: String!){
      addTodo: createTodo(title: $title, completed: false, user_id: 123){
        id,
        title,
        completed
      }
    }
`
export const UPDATE_TODO = gql`
    mutation updateTodo($id: ID!, $completed: Boolean!){
      updateTodo(id: $id, completed: $completed){
        id
        title
        completed
      }
    }
`
export const REMOVE_TODO = gql`
    mutation removeTodo($id: ID!){
      removeTodo(id: $id){
        id
        title
        completed
      }
    }
`

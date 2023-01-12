import React from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {ALL_TODOS, REMOVE_TODO, UPDATE_TODO} from "../apollo/todoService";
import TodoItem from "./TodoItem";
import {Spinner} from "@chakra-ui/react";

const TodoList = () => {
    const {loading, data, error} = useQuery(ALL_TODOS);
    const [removeTodo, {loading: removeLoading, error: removeError}] = useMutation(REMOVE_TODO, {
        update(cache, {data: {removeTodo}}) {
            cache.modify({
                fields: {
                    allTodos(currentTodos = []) {
                        return currentTodos.filter(todo => todo.__ref !== `Todo:${removeTodo.id}`);
                    }
                }
            })
        }
    })
    const [toggleTodo, {error: toggleError}] = useMutation(UPDATE_TODO)
    const handleDeleteTodo = (id) => {
        removeTodo({
            variables: {
                id
            }
        })
    }
    const handleToggleTodo = (id, completed) => {
        toggleTodo({
            variables: {
                id,
                completed: !completed
            }
        })
    }
    if (error) return <p>{error.message}</p>
    if (loading) return <Spinner/>;
    return (
        <ul className="TodoList">
            {data.todos.map(todo => <TodoItem
                {...todo}
                key={todo.id}
                handleDeleteTodo={handleDeleteTodo}
                handleToggleTodo={handleToggleTodo}
                removeLoading={removeLoading}
                removeError={removeError}
                toggleError={toggleError}
            />)}
        </ul>
    );
};

export default TodoList;

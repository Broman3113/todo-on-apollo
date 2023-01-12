import React from 'react';
import {Button, Input} from "@chakra-ui/react";
import {useMutation} from "@apollo/client";
import {ADD_TODO, ALL_TODOS} from "../apollo/todoService";

const AddTodo = () => {
    const [input, setInput] = React.useState('');
    const [addTodo, {loading}] = useMutation(ADD_TODO, {
        update(cache, {data: {addTodo}}) {
            const {todos} = cache.readQuery({query: ALL_TODOS});
            cache.writeQuery({
                query: ALL_TODOS,
                data: {
                    todos: [...todos, addTodo ]
                }
            })
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()){
            addTodo({
                variables: {
                    title: input
                }
            })
            setInput('');
        }
    }
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <form className="AddTodo" onSubmit={handleSubmit}>
            <Input placeholder='Enter title' size='md' width='auto' onChange={handleInputChange} value={input}/>
            <Button colorScheme='teal' size='md' type={"submit"} width={"100px"} isLoading={loading}>
                Add Todo
            </Button>
        </form>
    );
};

export default AddTodo;

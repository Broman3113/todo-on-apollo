import React from 'react';
import {Checkbox, IconButton} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";
import {Text} from '@chakra-ui/react'

const TodoItem = ({
                      id,
                      title,
                      completed,
                      handleDeleteTodo,
                      handleToggleTodo,
                      removeLoading,
                      removeError,
                      toggleError
}) => {

    return (
        <li className="TodoItem">
            <Checkbox isChecked={completed} onChange={() => handleToggleTodo(id, completed)}/>
            <Text>{title}</Text>
            <IconButton onClick={() => handleDeleteTodo(id)}
                        icon={<CloseIcon/>}
                        aria-label="Remove Todo"
                        colorScheme='teal'
                        size={'sm'}
                        isLoading={removeLoading}
            />
            {removeError && <p>{removeError.message}</p>}
            {toggleError && <p>{toggleError.message}</p>}
        </li>
    );
};

export default TodoItem;

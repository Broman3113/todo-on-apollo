import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {ApolloProvider} from "@apollo/client";
import {client} from "./apollo";
import {ChakraProvider} from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </ChakraProvider>
    </React.StrictMode>
);

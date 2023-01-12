import './App.css';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
    return (
        <div className="App">
            <div className="TodoContainer">
                <AddTodo/>
                <TodoList/>
            </div>
        </div>
    );
}

export default App;

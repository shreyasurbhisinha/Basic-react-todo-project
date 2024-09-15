import AppName from "./components/appname";
import AddTodo from "./components/Addtodo";
import TodoItem1 from "./components/todoitem1";
import TodoItem2 from "./components/TODOITEM2";
import "./App.css";





function App() {
  return (
    <center className="todo-container">
     <AppName/>

      <AddTodo/>
      <div class="items-container">
      
      <TodoItem1/>
      <TodoItem2/>
      </div>
      
    </center>
  );
}

export default App;

import "./styles.css";
import { ToDoItem } from "./todo";
import { Display } from "./DOM";


const defaultToDoItem = new ToDoItem('First Project', "Write something here", "due date", "high");

console.log(defaultToDoItem.info)
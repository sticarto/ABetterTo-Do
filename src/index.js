import "./styles.css";
import { ToDoItem } from "./todo";
import { DOM } from "./DOM";


const defaultToDoItem = new ToDoItem('Take out the trash', "Write something here", "due date", "high");

DOM.displayTask(defaultToDoItem);
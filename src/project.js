import { ToDoItem } from "./todo";

// This stores to-do lists
class Project {
    #title;
    #toDoLists = [];

    constructor(title) {
        this.#title = title;
    }

    addToDoList(toDoList) {
        if (!(toDoList instanceof ToDoItem)) {
            console.error("Error: the parameter must be an instance of the ToDoItem class");
            return;
        }

        this.#toDoLists.push(toDoList);
    }

    // remove to do lists


    get lists() {
        return this.#toDoLists;
    }
    
}

export {Project};
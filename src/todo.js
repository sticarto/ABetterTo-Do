
class ToDoItem {
    #title;
    #description;
    #dueDate;
    #priority;

    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }

    get info() {
        return `Title: ${this.#title}, Description: ${this.#description}, Due Date: ${this.#dueDate}, Priority: ${this.#priority}`;
    }
    

}

export {ToDoItem};

class ToDoItem {
    #title;
    #description;
    #dueDate;
    #priority;

    constructor(title, description = "", dueDate = "", priority ="") {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }

    get info() {
        return `${this.#title}, Due Date: ${this.#dueDate}, Priority: ${this.#priority}`;
    }

    get description () {
        return this.#description;
    }
    

}

export {ToDoItem};
import { makeAutoObservable } from "mobx"

type Todo = {
    id: number
    name: string
    done: boolean
}

class Store {

    todos: Array<Todo> = []
    newTodo: string = ""
    lastId: number = 0;

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(name: string) {
        if (name==="") {
            return;
        }
        
        this.todos.push({
            id: this.lastId,
            name: name,
            done: false
        })

        this.lastId++;

    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter((todo)=>{
            return todo.id != id
        })
    }


    checkTodo(id: number, checked: boolean) {

        this.todos.forEach(todo=>{
            if (todo.id === id) {
                todo.done = checked
            }
        })

    }

}

const store = new Store

export default store
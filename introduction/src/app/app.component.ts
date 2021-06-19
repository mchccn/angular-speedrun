import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    value = "";

    counter = 0;

    todos = [] as {
        todo: string;
        completed: boolean;
    }[];

    increment() {
        this.counter++;
    }

    addTodo(todo: string) {
        this.todos.unshift({ todo, completed: false });

        this.value = "";
    }

    removeTodo(i: number) {
        this.todos.splice(i, 1);
    }
}

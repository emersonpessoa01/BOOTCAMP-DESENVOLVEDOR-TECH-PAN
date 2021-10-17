import { Component } from "@angular/core";
import { TodoItem } from "./todoItem";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent {
    food: TodoItem[] = [
        { name: "Dumpling", select: true },
        { name: "Burger", select: false },
        { name: "Sandwich", select: false },
    ];
}

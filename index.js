#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select your desired option.",
            name: "Select",
            choices: ["Add Task", "Update Task", "Delete Task", "View Tasks", "Exit"],
        });
        if (ans.Select === "Add Task") {
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add tasks todo.",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.Select === "Update Task") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Select an task you want to update",
                name: "todo",
                choices: todos.map((item) => item),
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add tasks todo",
                name: "todo",
            });
            let newTodo = todos.filter((val) => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.Select === "Delete Task") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Select an task you want to update",
                name: "todo",
                choices: todos.map((item) => item),
            });
            let newTodo = todos.filter((val) => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
        if (ans.Select === "View Tasks") {
            console.log(todos);
        }
        if (ans.Select === "Exit") {
            break;
        }
    } while (true);
}
createTodo(todos);

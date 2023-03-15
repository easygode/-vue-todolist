'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: "",
            list: [
                {
                    text: "Do the groceries",
                    done: true,
                },
                {
                    text: "Pick up kids at school",
                    done: true,
                },
                {
                    text: "Learn Vue.js",
                    done: true,
                }
            ]
        }
    },
    methods: {

        addTodoList() {
            if (this.todoList.trim().toLowerCase() !== "" ) {
                this.toDoList.push({text: this.todoList, done: ""});
                this.todoList = "";
            }
        },

        resetList(element) {
            this.list.splice(element, 1)
        },
    }
}).mount("#app")
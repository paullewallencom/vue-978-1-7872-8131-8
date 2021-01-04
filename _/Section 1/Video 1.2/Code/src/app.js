new Vue({
    /**
     * Bind the Vue application to the element with the id of 'app'.
     */
    el: '#app',

    /**
     * The data as a view-model.
     */
    data: {
        todo: null,
        editTodo: null,
        todoItems: [],
    },

    /**
     * Computed properties are defined here.
     */
    computed: {
        /**
         * Computed property which will check if there is a todo being edited.
         *
         * @returns {boolean} If a todo is being edited.
         */
        isBeingEdited() {
            return this.todoItems
                    .filter(item => item.isEdited)
                    .length > 0;
        },

        /**
         * Computed property which will check if the newly added todo is valid.
         *
         * @returns {boolean} If the newly added todo is valid.
         */
        todoIsValid() {
            return !!this.todo;
        },

        /**
         * Computed property which will check if the edit todo is valid.
         *
         * @returns {boolean} If the edit todo is valid.
         */
        editTodoIsValid() {
            return !!this.editTodo;
        },
    },

    /**
     * The methods being used by the component.
     */
    methods: {
        /**
         * Method used to add a new todo.
         *
         * @param todo The newly created todo.
         */
        add(todo) {
            if (!this.todoIsValid) {
                return;
            }

            // Add a new to do in the array of todos.
            this.todoItems
                .push({
                    content: todo,
                    finished: false,
                    isEdited: false,
                });

            // Reset the input.
            this.todo = null;
        },

        /**
         * Method used to remove a todo.
         *
         * @param todo The todo to be removed.
         */
        remove(todo) {
            this.todoItems = this.todoItems
                .filter(item => item !== todo);
        },

        /**
         * Method used to edit a todo.
         *
         * @param todo The todo to be edited.
         */
        edit(todo) {
            this.editTodo = todo.content;
            todo.isEdited = true;
        },

        /**
         * Method used to cancel editing the todo.
         *
         * @param todo The todo being edited.
         */
        cancelEdit(todo) {
            this.editTodo = null;
            todo.isEdited = false;
        },

        /**
         * Method used to update a todo.
         *
         * @param todo The todo to be updated.
         */
        update(todo) {
            if (!this.editTodoIsValid) {
                return;
            }

            todo.content = this.editTodo;
            todo.isEdited = false;

            // Reset the edit todo.
            this.editTodo = null;
        }
    }
});
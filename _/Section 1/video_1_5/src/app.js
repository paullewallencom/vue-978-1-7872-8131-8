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
        todos: [],
    },

    /**
     * Computed properties are defined here.
     */
    computed: {
        /**
         * Computed property which will check if the newly added todo is valid.
         *
         * @returns {boolean} If the newly added todo is valid.
         */
        todoIsValid() {
            return !!this.todo;
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
            this.todos.push({
                content: todo,
                finished: false,
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
            this.todos = this.todos
                .filter(item => item !== todo);
        },
    }
});
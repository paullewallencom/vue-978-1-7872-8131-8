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
            this.todos.push(todo);

            // Reset the input.
            this.todo = null;
        },
    }
});
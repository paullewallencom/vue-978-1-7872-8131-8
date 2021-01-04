<style lang="scss">
  .message {
    display: inline-block;
    background-color: #000;
    color: #fff;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .message--self {
    background-color: #4b4b4b;
    align-self: flex-end;
  }
</style>
<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    /**
     * The properties which the component can use.
     */
    props: {
      /**
       * If the message has been send by the user.
       */
      isSelf: {
        type: Boolean,
        required: false,
      },
    },

    /**
     * The computed properties which the component can use.
     */
    computed: {
      /**
       * The CSS classes of the component.
       *
       * @returns {Array} The array of CSS classes.
       */
      classNames() {
        const classNames = ['message'];

        if (this.isSelf) {
          classNames.push('message--self');
        }

        return classNames;
      },
    },
  };
</script>

<template>
  <v-section
    color="black"
    full
  >
    <v-form @submit.prevent.native="join(room, username)">
      <v-form-group>
        <v-text-field
          large
          v-model="room"
          placeholder="Room"
        ></v-text-field>
      </v-form-group>
      <v-form-group>
        <v-text-field
          large
          v-model="username"
          placeholder="Username"
        ></v-text-field>
      </v-form-group>
      <v-form-group>
        <v-button
          large
          :disabled="!isValid"
        >
          Join
        </v-button>
      </v-form-group>
    </v-form>
  </v-section>
</template>
<script>
  import VButton from './../../components/button/button';
  import VForm from './../../components/form/form';
  import VFormGroup from './../../components/form/form-group';
  import VSection from './../../components/section/section';
  import VTextField from './../../components/text-field/text-field';

  export default {
    /**
     * The data this page can use.
     */
    data() {
      return {
        username: null,
        room: null,
      };
    },

    /**
     * Computed properties which this page can use.
     */
    computed: {
      /**
       * If the input is valid.
       *
       * @returns {Boolean} If the input is valid.
       */
      isValid() {
        let isValid = true;

        if (!this.room) {
          isValid = false;
        }

        if (!this.username) {
          isValid = false;
        }

        return isValid;
      },
    },

    /**
     * The methods this page can use.
     */
    methods: {
      /**
       * Method used to join a room.
       *
       * @param {string} room     The room to be joined.
       * @param {string} username The chosen username.
       */
      join(room, username) {
        if (this.isValid) {
          this.$store.dispatch('join', { username, room });
        }
      },
    },

    /**
     * The components this page can use.
     */
    components: {
      VButton,
      VForm,
      VFormGroup,
      VSection,
      VTextField,
    },
  };
</script>

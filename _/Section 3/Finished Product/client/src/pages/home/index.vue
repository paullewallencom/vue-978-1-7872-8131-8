<template>
  <v-body>
    <v-section color="black">
      <v-form-group>
        <v-button
          reversed
          @click.native="leave"
        >
          Leave room "{{ $store.state.room }}"
        </v-button>
      </v-form-group>
    </v-section>
    <v-section
      ref="messages"
      color="white"
      full
    >
      <v-message
        v-for="item in $store.state.messages"
        :key="message"
        :is-self="$store.state.username === item.username"
      >
        <v-message-user v-if="$store.state.username !== item.username">
          {{ item.username }}
        </v-message-user>
        <v-message-content>
          {{ item.message }}
        </v-message-content>
      </v-message>
    </v-section>
    <v-section color="black">
      <v-form
        inline
        @submit.prevent.native="sendMessage(message)"
      >
        <v-form-group
          inline
          full-width
        >
          <v-text-field
            v-model="message"
            placeholder="Message"
            ref="messageInput"
          >
          </v-text-field>
        </v-form-group>
        <v-form-group inline>
          <v-button
            reversed
            type="submit"
          >
            Send message
          </v-button>
        </v-form-group>
      </v-form>
    </v-section>
  </v-body>
</template>
<script>
  import VBody from '../../components/body/body';
  import VButton from '../../components/button/button';
  import VForm from './../../components/form/form';
  import VFormGroup from './../../components/form/form-group';
  import VMessage from './../../components/message/message';
  import VMessageContent from './../../components/message/message-content';
  import VMessageUser from './../../components/message/message-user';
  import VSection from './../../components/section/section';
  import VTextField from './../../components/text-field/text-field';

  export default {
    /**
     * The data this page can use.
     */
    data() {
      return {
        message: null,
        room: null,
      };
    },

    watch: {
      // eslint-disable-next-line
      '$store.state.messages': function () {
        this.$nextTick(() => {
          this.scrollDown();
        });
      },
    },

    /**
     * The methods this page can use.
     */
    methods: {
      /**
       * Method used to send a new message.
       *
       * @param {*} message The message to be send.
       */
      sendMessage(message) {
        if (!message) {
          return;
        }

        this.$store.dispatch('sendMessage', message);
        this.message = null;
      },

      /**
       * Method used to leave the room.
       */
      leave() {
        this.$store.dispatch('leave');
      },

      /**
       * Method used to scroll down the messages.
       */
      scrollDown() {
        const messages = this.$refs.messages.$el;
        messages.scrollTop = messages.scrollHeight;
      },
    },

    mounted() {
      this.$refs.messageInput.$el.focus();
    },

    /**
     * The components this page can use.
     */
    components: {
      VBody,
      VButton,
      VForm,
      VFormGroup,
      VMessage,
      VMessageContent,
      VMessageUser,
      VSection,
      VTextField,
    },
  };
</script>

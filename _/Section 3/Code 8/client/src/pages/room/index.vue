<template>
  <v-body>
    <v-section color="black">
      <v-form-group>
        <v-button
          inverted
          @click.native="leave"
        >
          Leave room "{{ $store.state.room}}"
        </v-button>
      </v-form-group>
    </v-section>
    <v-section
      color="white"
      full
    >
      <v-message
        v-for="item in $store.state.messages"
        :key="item"
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
          ></v-text-field>
        </v-form-group>
        <v-form-group
          inline
        >
          <v-button
            inverted
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
  import VBody from '@/components/body/body';
  import VSection from '@/components/section/section';
  import VFormGroup from '@/components/form/form-group';
  import VButton from '@/components/button/button';
  import VMessage from '@/components/message/message';
  import VMessageUser from '@/components/message/message-user';
  import VMessageContent from '@/components/message/message-content';
  import VForm from '@/components/form/form';
  import VTextField from '@/components/text-field/text-field';

  export default {
    data() {
      return {
        message: null,
      };
    },
    methods: {
      sendMessage(message) {
        if (!message) {
          return;
        }

        this.$store.dispatch('sendMessage', message);
        this.message = null;
      },
      leave() {
        this.$store.dispatch('leave');
      },
    },
    components: {
      VBody,
      VSection,
      VFormGroup,
      VButton,
      VMessage,
      VMessageUser,
      VMessageContent,
      VForm,
      VTextField,
    },
  };
</script>

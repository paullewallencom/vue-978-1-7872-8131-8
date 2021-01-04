import Vue from 'vue';
import * as types from './mutation-types';

export default {
  [types.NEW_MESSAGE](state, message) {
    state.messages.push(message);
  },
  [types.SEND_MESSAGE](state, message) {
    message = {
      message,
      username: state.username,
    };

    Vue.socket.emit('newMessage', message);
  },
  [types.JOIN](state, { username, room }) {
    Vue.socket.emit('enterRoom', room);

    state.room = room;
    state.username = username;
    state.hasJoined = true;
  },

  [types.LEAVE](state) {
    Vue.socket.emit('leaveRoom', state.room);

    state.messages = [];
    state.hasJoined = false;
  },
};

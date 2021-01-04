import Vue from 'vue';
import * as types from './mutation-types';

export default {
  [types.RECEIVE_MESSAGE](state, message) {
    state.messages.push(message);
  },

  [types.SEND_MESSAGE](state, message) {
    message = {
      message,
      username: state.username,
    };

    Vue.socket.emit('message@create', message);
  },

  [types.JOIN](state, { username, room }) {
    Vue.socket.emit('enterRoom', room);

    state.room = room;
    state.username = username;
    state.hasJoined = true;

    Vue.router.push({
      name: 'home.index',
    });
  },

  [types.LEAVE](state) {
    Vue.socket.emit('leaveRoom', state.room);

    state.messages = [];
    state.hasJoined = false;

    Vue.router.push({
      name: 'join.index',
    });
  },
};

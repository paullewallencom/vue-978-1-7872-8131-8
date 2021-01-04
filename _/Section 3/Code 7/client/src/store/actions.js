import * as types from './mutation-types';

export const sendMessage = ({ commit }, payload) => {
  commit(types.SEND_MESSAGE, payload);
};

export const newMessage = ({ commit }, payload) => {
  commit(types.NEW_MESSAGE, payload);
};

export const join = ({ commit }, payload) => {
  commit(types.JOIN, payload);
};

export const leave = ({ commit }, payload) => {
  commit(types.LEAVE, payload);
};

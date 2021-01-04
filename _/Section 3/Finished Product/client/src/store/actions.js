import * as types from './mutation-types';

/**
 * Action used to send a new message.
 *
 * @param commit  {Function} The commit function.
 * @param payload {Object}   The payload to be send.
 */
export const sendMessage = ({ commit }, payload) => {
  commit(types.SEND_MESSAGE, payload);
};

/**
 * Action used to receive a new message.
 *
 * @param commit  {Function} The commit function.
 * @param payload {Object}   The payload to be send.
 */
export const receiveMessage = ({ commit }, payload) => {
  commit(types.RECEIVE_MESSAGE, payload);
};

/**
 * Action used to join a room.
 *
 * @param commit  {Function} The commit function.
 * @param payload {Object}   The payload to be send.
 */
export const join = ({ commit }, payload) => {
  commit(types.JOIN, payload);
};

/**
 * Action used to leave a room.
 *
 * @param commit  {Function} The commit function.
 * @param payload {Object}   The payload to be send.
 */
export const leave = ({ commit }, payload) => {
  commit(types.LEAVE, payload);
};

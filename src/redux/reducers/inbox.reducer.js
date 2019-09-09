/* eslint-disable object-curly-newline */
import {
  GET_INBOX_INDIVIDUAL_MAIL,
  GET_INBOX_GROUP_MAIL,
  GET_SENT_MAIL,
  GET_DRAFT_MAIL,
} from '../types/inbox.type';

const initialState = {
  inboxIndividual: [],
  inboxGroup: [],
  sent: [],
  draft: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_INBOX_INDIVIDUAL_MAIL:
      return {
        ...state,
        inboxIndividual: payload,
      };
    case GET_INBOX_GROUP_MAIL:
      return {
        ...state,
        inboxGroup: payload,
      };
    case GET_SENT_MAIL:
      return {
        ...state,
        sent: payload,
      };
    case GET_DRAFT_MAIL:
      return {
        ...state,
        draft: payload,
      };
    default:
      return state;
  }
};

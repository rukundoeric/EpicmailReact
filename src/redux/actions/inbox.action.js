/* eslint-disable no-multi-assign */
/* eslint-disable import/prefer-default-export */
import { individualList, groupList } from '../data/inbox.data';
import draftList from '../data/draft.data';
import sentList from '../data/sent.data';
import {
  GET_INBOX_INDIVIDUAL_MAIL,
  GET_INBOX_GROUP_MAIL,
  SEND_MAIL,
  GET_SENT_MAIL,
  GET_DRAFT_MAIL,
} from '../types/inbox.type';

export const getInboxIndividual = () => async (dispatch) => {
  dispatch({
    type: GET_INBOX_INDIVIDUAL_MAIL,
    payload: individualList,
  });
  return individualList;
};

export const getInboxGroup = () => async (dispatch) => {
  dispatch({
    type: GET_INBOX_GROUP_MAIL,
    payload: groupList,
  });
  return groupList;
};

export const sendEmail = mail => async (dispatch) => {
  try {
    if (mail.status === 'sent') {
      if (mail.type === 'indivual') {
        individualList.push(mail);
        sentList.push(mail);
      } else {
        groupList.push(mail);
        sentList.push(mail);
      }
    } else {
      draftList.push(mail);
    }
    dispatch({
      type: SEND_MAIL,
      payload: mail,
    });
    return true;
  } catch (err) {
    return err.responce;
  }
};

export const getDraftMails = () => async (dispatch) => {
  dispatch({
    type: GET_DRAFT_MAIL,
    payload: draftList,
  });
  return draftList;
};

export const getSentMail = () => async (dispatch) => {
  dispatch({
    type: GET_SENT_MAIL,
    payload: sentList,
  });
  return sentList;
};

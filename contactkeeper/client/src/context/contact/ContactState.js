import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initalState = {
    contacts: [
      {
        id: 1,
        name: 'jill Johnson',
        phone: '111-222-333',
        type: 'personal',
        email: 'my@ayhoo.com'
      },
      {
        id: 2,
        name: 'ben mike',
        phone: '111-222-333',
        type: 'personal'
      },
      {
        id: 3,
        name: 'even GEn',
        phone: '111-222-333',
        type: 'professional',
        email: 'myadsfa@gmal.com'
      }
    ],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(contactReducer, initalState);
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  //clear filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

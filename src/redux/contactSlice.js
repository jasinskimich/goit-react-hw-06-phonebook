import { createSlice, createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('contacts/setFilter');
export const initializeContacts = createAction('contacts/initializeContacts');

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {},
  extraReducers: {
    [addContact]: (state, action) => {
      state.items.push(action.payload);
    },
    [deleteContact]: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    [setFilter]: (state, action) => {
      state.filter = action.payload;
    },
    [initializeContacts]: state => {
      const savedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (savedContacts) {
        state.items = savedContacts;
      }
    },
  },
});

export default contactSlice.reducer
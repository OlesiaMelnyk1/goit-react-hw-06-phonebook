import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact(state, { payload }) {
      state.contacts = [payload, ...state.contacts];
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const contactsReducer = contactSlice.reducer;
export const { addNewContact, deleteContact } = contactSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
// import { useFilterContactQuery } from '../contacts/contactsApi';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const getFilter = state => state.contacts.filter;
export const contactsFiltered = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const { setFilter } = contactsSlice.actions;

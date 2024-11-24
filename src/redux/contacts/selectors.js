import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const loading = state => state.contacts.loading;
export const error = state => state.contacts.error;

export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (contacts !== null)
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
  }
);

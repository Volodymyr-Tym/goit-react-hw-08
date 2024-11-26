import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading;
export const selectIsError = state => state.contacts.error;

export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (contacts !== null)
      return contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
          contact.number.includes(filter.trim())
      );
  }
);

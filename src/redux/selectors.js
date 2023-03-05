import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.global.isLoading;
export const selectError = state => state.global.error;
export const selectFilter = state => state.filter;
export const selectLogin = state => state.auth.isLogin;
export const selectName = state => state.auth.userData.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

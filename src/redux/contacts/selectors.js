import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectPhoneFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectPhoneFilter],
  (contacts, filter, phoneFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) &&
    contact.number.includes(phoneFilter)
    );
  }
);

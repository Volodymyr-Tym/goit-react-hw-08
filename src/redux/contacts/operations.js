import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  deleteContactById,
  getAllContacts,
  postNewContact,
  updateContactById,
} from '../../api/contacts';

export const getContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkApi) => {
    try {
      const data = await getAllContacts(_);
      console.log('data->', data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (NewContact, thunkApi) => {
    try {
      const data = await postNewContact(NewContact);

      console.log('NewContact->data->', data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const data = await deleteContactById(contactId);

      console.log('delContact->data->', data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, updatedData }, thunkApi) => {
    try {
      const data = await updateContactById(contactId, updatedData);

      console.log('UpdatedContact->data->', data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

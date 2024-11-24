import { createAsyncThunk } from '@reduxjs/toolkit';

import { registerUser } from '../../api/auth';

export const apiRegister = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const data = await registerUser(formData);
      // "name": "Adrian Cross",
      // "email": "across@mail.com",
      // "password": "examplepwd12345"
      console.log('data->', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const apiLogin = createAsyncThunk('auth/login', async (_, thunkApi) => {
//   try {
//     const data = await getContacts(_);

//     return data;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

// export const apiLogout = createAsyncThunk(
//   'auth/logout',
//   async (_, thunkApi) => {
//     try {
//       const data = await getContacts(_);

//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const apiRefreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkApi) => {
//     try {
//       const data = await getContacts(_);

//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6434036c1c5ed06c958cbff6.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fecthAll',
    async (_, ThunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
            
        }
        catch (e) {
            return ThunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, ThunkAPI) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;
        }
        catch (e) {
            return ThunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, ThunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        }
        catch (e) {
            return ThunkAPI.rejectWithValue(e.message);
        }
    }
);
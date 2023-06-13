import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

const contactSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContacts: (state, { payload }) => {
            const { name, number } = payload;
            const id=uuidv4();
            const contact = { id, name, number };
        state.push(contact);
          
          },

		deleteContacts: (state, { payload })  =>
        state.filter(({ id }) => id !== payload),
    
		
	},
})

export const contactReducer = contactSlice.reducer

export const { addContacts, deleteContacts } = contactSlice.actions
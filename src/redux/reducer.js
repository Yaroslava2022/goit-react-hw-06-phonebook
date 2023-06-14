import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const reducer =  combineReducers({
    contacts: contactReducer,
    filter: filterReducer
})
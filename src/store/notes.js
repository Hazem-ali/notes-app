import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    noteAdded: (notes, action) => {
      notes.push({
        id: ++lastId,
        title: action.payload.title,
        color: action.payload.color,
        content: action.payload.content,
      });
      return notes;
    },
  },
});

export const { noteAdded } = slice.actions;
export default slice.reducer;

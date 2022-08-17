import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { toggleValueInArray } from '../../utils/toggleValueInArray';

export interface InitialLikesState {
  likes: string[];
}

export const initialLikesState: InitialLikesState = {
  likes: [],
};

const likesSlice = createSlice({
  name: 'likes',
  initialState: initialLikesState,
  reducers: {
    toggleLike: (state, action: PayloadAction<string>) => {
      state.likes = toggleValueInArray(state.likes, action.payload);
    },
  },
});

export const { toggleLike } = likesSlice.actions;

export const likesReducer = likesSlice.reducer;

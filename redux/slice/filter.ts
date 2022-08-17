import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { toggleValueInArray } from '../../utils/toggleValueInArray';

export interface InitialFilterState {
  colors: string[];
  priceRange: string[];
  tags: string[];
  page: number;
}

export const initialFilterState: InitialFilterState = {
  colors: [],
  priceRange: [],
  tags: [],
  page: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    toggleColor: (state, action: PayloadAction<string>) => {
      state.colors = toggleValueInArray(state.colors, action.payload);
      state.page = 0;
    },
    togglePriceRange: (state, action: PayloadAction<string>) => {
      state.priceRange = toggleValueInArray(state.priceRange, action.payload);
      state.page = 0;
    },
    toggleTag: (state, action: PayloadAction<string>) => {
      state.tags = toggleValueInArray(state.tags, action.payload);
      state.page = 0;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    clearFilter: () => ({ ...initialFilterState }),
  },
});

export const {
  toggleColor,
  togglePriceRange,
  toggleTag,
  setPage,
  clearFilter,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

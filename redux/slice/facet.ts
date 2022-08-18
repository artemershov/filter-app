import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Facet } from '../../types/facet';

export const initialFacetState: Facet = {
  'options.color': {},
  price_range: {},
  tags: {},
};

const facetSlice = createSlice({
  name: 'facet',
  initialState: initialFacetState,
  reducers: {
    setFacet: (state, action: PayloadAction<Facet>) => ({
      ...state,
      ...action.payload,
    }),
    updateFacet: (state, action: PayloadAction<Facet>) => {
      (Object.keys(action.payload) as Array<keyof Facet>).forEach((facet) => {
        Object.keys(state[facet]).forEach((key) => (state[facet][key] = 0));
        state[facet] = {
          ...state[facet],
          ...action.payload[facet],
        };
      });
    },
  },
});

export const { setFacet, updateFacet } = facetSlice.actions;

export const facetReducer = facetSlice.reducer;

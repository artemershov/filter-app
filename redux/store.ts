import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './slice/filter';
import { facetReducer } from './slice/facet';
import { likesReducer } from './slice/likes';

export const store = configureStore({
  reducer: {
    facet: facetReducer,
    filter: filterReducer,
    likes: likesReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;


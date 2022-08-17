import { createSelector } from 'reselect';
import { RootState } from '../store';

export const filterSelector = (state: RootState) => state.filter;

export const facetFilterSelector = createSelector(filterSelector, (filter) => [
  filter.colors.map((item) => `options.color:${item}`).sort(),
  filter.priceRange.map((item) => `price_range:${item}`).sort(),
  filter.tags.map((item) => `tags:${item}`).sort(),
]);

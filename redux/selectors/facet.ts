import { createSelector } from 'reselect';
import { RootState } from '../store';

export const facetSelector = (state: RootState) => state.facet;

const convertFacet = (facet: Record<string, number>) =>
  Object.entries(facet).reduce<Array<{ key: string; value: number }>>(
    (acc, [key, value]) => [...acc, { key, value }],
    []
  );

export const filterOptionsSelector = createSelector(
  facetSelector,
  (facets) => ({
    colorsOptions: convertFacet(facets['options.color']),
    priceOptions: convertFacet(facets.price_range),
    tagsOptions: convertFacet(facets.tags),
  })
);

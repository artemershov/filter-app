import algoliasearch from 'algoliasearch';

export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string
);

export const productsIndex = searchClient.initIndex('shopify_products');
import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import Header from '../components/Header';
import TagsFilter from '../components/TagsFilter';
import Filter from '../components/Filter';
import Products from '../components/Products';
import Promo from '../components/Promo';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import { filterSelector, facetFilterSelector } from '../redux/selectors/filter';
import { setFacet, updateFacet } from '../redux/slice/facet';
import { Facet } from '../types/facet';
import { Product } from '../types/product';
import { productsIndex } from '../utils/algolia';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const { page } = useSelector(filterSelector);
  const facetFilters = useSelector(facetFilterSelector);

  const { data: { facets = {} } = {} } = useSWR('facetFilters', () =>
    productsIndex.search('', {
      facets: ['options.color', 'price_range', 'tags'],
      hitsPerPage: 0,
    })
  );

  const { data: { hits = [], facets: newFacets = {}, nbPages = 0 } = {} } =
    useSWR(`${page}-${facetFilters.toString()}`, () =>
      productsIndex.search<Product>('', {
        page,
        facetFilters,
        facets: ['options.color', 'price_range', 'tags'],
        attributesToRetrieve: ['objectID', 'title', 'image', 'price'],
        hitsPerPage: 12,
      })
    );

  useEffect(() => {
    dispatch(setFacet(facets as Facet));
  }, [dispatch, facets]);

  useEffect(() => {
    dispatch(updateFacet(newFacets as Facet));
  }, [dispatch, newFacets]);

  return (
    <>
      <Head>
        <title>Miista</title>
        <meta name="description" content="filter app assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-[#f8f5ee]">
        <div className="container max-w-[1320px] mx-auto pt-16 pb-12 flex">
          <TagsFilter />
          <Filter />
        </div>

        <section className="container max-w-[1320px] mx-auto py-8">
          <Products data={hits.slice(0, 9)} />
        </section>

        <div className="py-8">
          <Promo />
        </div>

        <section className="container max-w-[1320px] mx-auto py-8">
          <Products data={hits.slice(9)} />
        </section>

        <div className="container max-w-[1320px] mx-auto py-8">
          <Pagination total={nbPages} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;

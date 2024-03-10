import React from 'react';
import useSWR from 'swr';
import { useFiltersContext } from '../../contexts/FiltersContext';
import GameCard from '../../components/GameCard/GameCard';

const ENDPOINT = 'https://bytebazaar.onrender.com/products/all?populateGameTitle=true';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  return json;
}

function ProductList() {
  const { data, error, isLoading } = useSWR(ENDPOINT, fetcher);
  const { checkedFilters } = useFiltersContext();

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  if (data) {
    if (checkedFilters.length === 0) {
      return (
        <>
          {data.products.map((product) => {
            return (
              <GameCard key={product._id} data={product} />
            );
          })}
        </>
      )
    } else {
      return (
        <>
          {data.products
            .filter((product) => {
              return (
                checkedFilters.includes(product.platform_id.name)
                || product.genres.some((genre) => {
                  return (
                    checkedFilters.includes(genre.genre_id.name)
                  )
                })
              )
            })
            .map((product) => {
              return (
                <GameCard key={product._id} data={product} />
              )
            })
          }
        </>
      )
    }
  }
}

export default ProductList;

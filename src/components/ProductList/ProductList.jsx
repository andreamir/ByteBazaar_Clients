import React from 'react';
import useSWR from 'swr';
import { useFiltersContext } from '../../contexts/FiltersContext';
import GameCard from '../../components/GameCard/GameCard';

const ENDPOINT =
  'https://bytebazaar.onrender.com/products/all?populateGameTitle=true';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  return json;
}

function isUpperCase(str) {
  return str[0] === str[0].toUpperCase();
}

function isLowerCase(str) {
  return str[0] === str[0].toLowerCase();
}

function ProductList() {
  const { data, error, isLoading } = useSWR(ENDPOINT, fetcher);
  const { checkedFilters } = useFiltersContext();
  const checkedGenres = checkedFilters.filter((checked) =>
    isLowerCase(checked)
  );
  const checkedPlatforms = checkedFilters.filter((checked) =>
    isUpperCase(checked)
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  if (data) {
    if (checkedFilters.length === 0) {
      return (
        <>
          {data.products.map((product) => {
            return <GameCard key={product._id} data={product} />;
          })}
        </>
      );
    } else {
      return (
        <>
          {data.products
            .filter((product) => {
              // Platform and Genres from the product
              const platform = product.platform_id.name;
              const genres = product.genres.map((genre) => genre.genre_id.name);

              // Only one type of filter is applied (genre or platform)
              if (checkedGenres.length === 0)
                return checkedPlatforms.includes(platform);
              if (checkedPlatforms.length === 0)
                return genres.some((genre) => checkedGenres.includes(genre));

              // Both types of filters are applied => We return the intersection of both types
              return (
                checkedPlatforms.includes(platform) &&
                genres.some((genre) => checkedGenres.includes(genre))
              );
            })
            .map((product) => {
              return <GameCard key={product._id} data={product} />;
            })}
        </>
      );
    }
  }
}

export default ProductList;

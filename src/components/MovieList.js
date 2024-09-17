import React from 'react';
import MovieCart from './MovieCart';

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return <div>Loading...</div>;
  }
  return (
    <div className='px-4 text-white'>
      <h1 className='font-semibold text-2xl py-2'>{title}</h1>
      <div className='flex'>
        <div className='flex flex-nowrap overflow-x-auto scroll-smooth hide-scrollbar'>
          {movies.map((movie) => (
            <MovieCart key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

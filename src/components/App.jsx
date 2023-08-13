import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from '../pages/MovieDetails';
import Layout from './Layout/Layout';

// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast';


const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Trailer = lazy(() => import('../components/Trailer/Trailer'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="trailer" element={<Trailer />} />
        </Route>
      </Route>
    </Routes>
  );
};
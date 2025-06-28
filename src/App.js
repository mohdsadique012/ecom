import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeShimmer from './Component/shimmer/HomeShimmer';
// Lazy load components
const HomePage = lazy(() => import('./Component/HomePage/HomePage'));
const DetailPage = lazy(() => import('./Component/DetailPage'));
const ListingPage = lazy(() => import('./Component/ListingPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<HomeShimmer />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/:userId" element={<DetailPage />} />
          <Route path="/all" element={<ListingPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

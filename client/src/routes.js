import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Products} from './pages/products';
// import {CreatePage} from './pages/CreatePage'
// import {DetailPage} from './pages/DetailPage'
// import {AuthPage} from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<Products />}>
        </Route>

       
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Products />}>
        <Products />
      </Route>
    </Routes>
  )
}
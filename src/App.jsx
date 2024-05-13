import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home/Home';
import Распродажи from './pages/Распродажи/Распродажи';
import Nothing from './pages/Nothing/Nothing';
import Layout from './Layout/Layout';
import Цены from './pages/Цены/Цены';
import Помощь from './pages/Помощь/Помощь';
import Магазины from './pages/Магазины/Магазины';
import Бонусы from './pages/Бонусы/Бонусы';
import Блог from './pages/Блог/Блог';
import Buy from './pages/Buy/Buy';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/распродажи',
        element: <Распродажи />
      },
      {
        path: '/цены',
        element: <Цены />
      },
      {
        path: '/помощь',
        element: <Помощь />
      },
      {
        path: '/магазины',
        element: <Магазины />
      },
      {
        path: '/бонусы',
        element: <Бонусы />
      },
      {
        path: '/блог',
        element: <Блог />
      },
      {
        path: '/как покупать',
        element: <Buy />
      },
    ],
  },
  {
    path: '*',
    element: <Nothing />
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

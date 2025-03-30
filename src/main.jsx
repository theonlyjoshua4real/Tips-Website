import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Membership from './pages/Membership.jsx'
import Sports from './pages/Sports.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import DashboardLayout from './dashboard/user/DashboardLayout.jsx'
import {
  OverviewPage,
  ProductsPage,
  AnalyticsPage,
  OrdersPage,
  SalesPage,
  SettingsPage,
  UsersPage,
} from './dashboard/user/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/membership',
    element: <Membership />
  },
  {
    path: '/sports/:sport',
    element: <Sports />
  },
  
  {
    path: "/user",
    element: <DashboardLayout />,
    children: [
      {
        path: "overview",
        element: <OverviewPage />
      },
      {
        path: "products",
        element: <ProductsPage />
      },
      {
        path: "analytics",
        element: <AnalyticsPage />
      },
      {
        path: "orders",
        element: <OrdersPage />
      },
      {
        path: "sales",
        element: <SalesPage />
      },
      {
        path: "settings",
        element: <SettingsPage />
      },
      {
        path: "users",
        element: <UsersPage />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

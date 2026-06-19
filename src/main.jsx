import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './redux/store/index';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import CartPage from './pages/CartPage';
import App from './App';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import DashboardLayout from './pages/DashboardLayout';
import AddProduct from './pages/AddProduct';
import Products from './components/Products/Products';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "categories",
                element: <CategoriesPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "product/:productId",
                element: <ProductDetails />,
            },
            {
                path: "cart",
                element: <CartPage />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "Products",
                element: <Products />,
            },
            {
                path: "product/add",
                element: <AddProduct />,
            },
            {
                path: "product/update/:id",
                element: <UpdateProduct />,
            },
        ],
    }
], {
    basename: "/store",
});
createRoot(document.getElementById('root')).render(<StrictMode>
     <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>);

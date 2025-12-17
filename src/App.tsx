import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/config/query-client-config";

import RootLayout from "./components/RootLayout";

import LoginForm from "./auth/login";

import GlobalError from "./components/GlobalError";

import RegisterForm from "@/auth/RegisterForm";

import ProfilePage from "@/pages/ProfilePage";

import AddressPage from "@/pages/AddressPage";

import BankPage from "@/pages/BankPage";

import ProtectedRoute from "@/routes/protected-route";

import AccountLayout from "./components/AccountLayout";

import HomePage from "./layouts/HomePage";

import CategoryPage from "./layouts/CategoryPage";

import WishListPage from "./layouts/WishListPage";

import CartPage from "./layouts/CartPage";

import SubCategories from "./components/SubCategories";

import ProductDetails from "./pages/ProductDetails";

import PrivacyPolicy from "./layouts/PrivacyPolicy";

import AboutUs from "./layouts/AboutUs";

import RefundPolicy from "./layouts/RefundPolicy";

import ShippingPolicy from "./layouts/ShippingPolicy";

import TermsAndCondition from "./layouts/TermsAndCondition";

import ContactUs from "./layouts/ContactUs";

import AllBlogs from "./layouts/AllBlogs";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <AccountLayout />,
        children: [
          { path: "profile", element: <ProfilePage /> },
          { path: "profile/addresses", element: <AddressPage /> },
          { path: "profile/bank-details", element: <BankPage /> },
        ],
      },
      {
        path: "dashboard",
        element: <p>Dashboard</p>,
      },
      {
        path: "order",
        element: <p>Orders</p>,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "addresses",
        element: (
          <ProtectedRoute>
            <AddressPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "bank-details",
        element: (
          <ProtectedRoute>
            <BankPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "categories",
        element: <CategoryPage />,
      },
      {
        path: "wish-list",
        element: <WishListPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },

      {
        path: "categories/mobiles",
        element: <SubCategories />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "refund",
        element: <RefundPolicy />,
      },
      {
        path: "terms-conditions",
        element: <TermsAndCondition />,
      },
      {
        path: "shipping",
        element: <ShippingPolicy />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "blogs",
        element: <AllBlogs />,
      },
    ],
  },

  {
    path: "*",
    element: <GlobalError />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

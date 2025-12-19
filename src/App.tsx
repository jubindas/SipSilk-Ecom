import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy, Suspense } from "react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/config/query-client-config";

const Disclaimer = lazy(() => import("./layouts/Disclaimer"));

const Orders = lazy(() => import("./layouts/Orders"));

const GlobalLoading = lazy(() => import("./components/GlobalLoading"));

const RootLayout = lazy(() => import("./components/RootLayout"));

const LoginForm = lazy(() => import("./auth/login"));

const GlobalError = lazy(() => import("./components/GlobalError"));

const RegisterForm = lazy(() => import("@/auth/RegisterForm"));

const ProfilePage = lazy(() => import("@/pages/ProfilePage"));

const AddressPage = lazy(() => import("@/pages/AddressPage"));

const BankPage = lazy(() => import("@/pages/BankPage"));

const ProtectedRoute = lazy(() => import("@/routes/protected-route"));

const AccountLayout = lazy(() => import("./components/AccountLayout"));

const HomePage = lazy(() => import("./layouts/HomePage"));

const CategoryPage = lazy(() => import("./layouts/CategoryPage"));

const WishListPage = lazy(() => import("./layouts/WishListPage"));

const CartPage = lazy(() => import("./layouts/CartPage"));

const SubCategories = lazy(() => import("./components/SubCategories"));

const ProductDetails = lazy(() => import("./pages/ProductDetails"));

const PrivacyPolicy = lazy(() => import("./layouts/PrivacyPolicy"));

const AboutUs = lazy(() => import("./layouts/AboutUs"));

const RefundPolicy = lazy(() => import("./layouts/RefundPolicy"));

const ShippingPolicy = lazy(() => import("./layouts/ShippingPolicy"));

const TermsAndCondition = lazy(() => import("./layouts/TermsAndCondition"));

const ContactUs = lazy(() => import("./layouts/ContactUs"));

const AllBlogs = lazy(() => import("./layouts/AllBlogs"));

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
          {
            path: "profile/wish-list",
            element: <WishListPage />,
          },
          {
            path: "profile/orders",
            element: <Orders />,
          },
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
      {
        path: "disclaimer",
        element: <Disclaimer />,
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
      <Suspense fallback={<GlobalLoading />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;

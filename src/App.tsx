import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/config/query-client-config";

import { ProtectedRoute } from "./auth/protected-route";

import RootLayout from "./components/RootLayout";

import { AuthProvider } from "./provider/auth-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <p> Dashbaord</p>,
      },
      {
        path: "/order",
        element: <p> Orders</p>,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;

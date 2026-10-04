import { RouterProvider } from 'react-router';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Toaster } from './components/ui/sonner';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { StoreProvider } from './context/StoreContext';
import { router } from './routes';

export default function App() {
  return (
    <AuthProvider>
      <StoreProvider>
        <CartProvider>
          <RouterProvider router={router} />
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </CartProvider>
      </StoreProvider>
    </AuthProvider>
  );
}

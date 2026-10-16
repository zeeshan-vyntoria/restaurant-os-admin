import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { adminRoutes } from '@/apps/admin/routes'
import { authRoutes } from '@/apps/auth/routes'
import { RootRedirect } from '@/shared/components/RequireAuth'
import { LoadingState, ToastProvider } from '@/shared/components/ui'
import { AuthProvider } from '@/shared/context/AuthContext'

/**
 * Each app lives in src/apps/<app> with its own pages, nav and routes;
 * code used by more than one app lives in src/shared.
 */
export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingState />}>
            <Routes>
              <Route path="/" element={<RootRedirect />} />
              {authRoutes}
              {adminRoutes}
              <Route path="*" element={<RootRedirect />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  )
}

import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './common/Layout'
import { DonutsProvider } from './state/donuts/DonutsProvider'

const MainPage = lazy(() => import('./pages/main/Main'))
const LandingPage = lazy(() => import('./pages/landing/Landing'))
const CartPage = lazy(() => import('./pages/cart/Cart'))

function App() {
    return (
        <>
            <Suspense fallback={null}>
                <BrowserRouter>
                    <DonutsProvider>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<LandingPage />} />
                                <Route path="/main" element={<MainPage />} />
                                <Route path="/cart" element={<CartPage />} />
                            </Routes>
                        </Layout>
                    </DonutsProvider>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default App

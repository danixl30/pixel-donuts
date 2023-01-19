import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './common/Layout'
import { DonutsProvider } from './state/donuts/DonutsProvider'

const MainPage = lazy(() => import('./pages/main/Main'))
const LandingPage = lazy(() => import('./pages/landing/Landing'))

function App() {
    return (
        <>
            <Suspense fallback={null}>
                <BrowserRouter>
                    <DonutsProvider>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<MainPage />} />
                                <Route
                                    path="/landing"
                                    element={<LandingPage />}
                                />
                            </Routes>
                        </Layout>
                    </DonutsProvider>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default App

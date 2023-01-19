import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './common/Layout'

const MainPage = lazy(() => import('./pages/main/Main'))
const LandingPage = lazy(() => import('./pages/landing/Landing'))

function App() {
    return (
        <>
            <Suspense fallback={null}>
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/landing" element={<LandingPage />} />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default App

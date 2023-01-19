import { MenuExplore } from './components/MenuExplore'
import { Sweet, SweetCarousel } from './components/SweetCarousel'

const elements: Sweet[] = [
    {
        id: 1,
        name: 'Donas Choco-Choco',
        description: 'Donas glaseadas con chocolate y chispas de chocolate',
        price: 'Bs 9,99',
        image: 'https://images.unsplash.com/photo-1579761314336-f27ea6297ae1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 2,
        name: 'PixelShake',
        description: 'Solo leche y helado para una fiesta de sabor',
        price: 'Bs 14,75',
        image: 'https://images.unsplash.com/photo-1525059337994-6f2a1311b4d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 3,
        name: 'Combo Triple Donas',
        description: 'Tres donas de sabores surtidos',
        price: 'Bs 20,00',
        image: 'https://images.unsplash.com/photo-1570352412018-d4ad8dd88b75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 19,
        name: 'Fiesta Donas',
        description: 'Porque no hace falta una excusa para celebrar',
        price: 'Bs 45,00',
        image: 'https://images.unsplash.com/photo-1631397832307-d8344ff719f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 9,
        name: 'Donas Primavera',
        description: 'Sabor sofisticado y delicado',
        price: 'Bs 149,99',
        image: 'https://images.unsplash.com/photo-1624300162353-4638839fbfc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
]

export default function LandingPage() {
    return (
        <>
            <MenuExplore />
            <SweetCarousel sweets={elements} />
        </>
    )
}

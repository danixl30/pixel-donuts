import { useState } from 'react'
import { Donut, DonutsList } from './componets/DonutsList'
import { ProductModal } from './componets/ModalProduct'

const products: Donut[] = [
    {
        id: 1,
        name: 'Donas Choco-Choco',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1579761314336-f27ea6297ae1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 2,
        name: 'PixelShake',
        price: 14.75,
        image: 'https://images.unsplash.com/photo-1525059337994-6f2a1311b4d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 3,
        name: 'Triple Donas (sabores surtidos)',
        price: 20.0,
        image: 'https://images.unsplash.com/photo-1570352412018-d4ad8dd88b75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 10,
        name: 'Surtidonas (Variadas)',
        price: 65.0,
        image: 'https://images.unsplash.com/photo-1560106952-abd9130296c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 9,
        name: 'Donas Primavera',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1624300162353-4638839fbfc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 100,
        name: 'Fiesta Donas (Pack 7)',
        price: 139.99,
        image: 'https://images.unsplash.com/photo-1631397833256-34809ae27872?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 19,
        name: 'Fiesta Donas (Pack Deluxe) ',
        price: 45.0,
        image: 'https://images.unsplash.com/photo-1631397832307-d8344ff719f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 21,
        name: 'Fiesta Donas (Pack 3)',
        price: 79.5,
        image: 'https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 22,
        name: 'Donas de Otoño (Pack 3)',
        price: 80.0,
        image: 'https://images.unsplash.com/photo-1631397833237-718c8d914d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 89,
        name: 'Crazy Mix',
        price: 50.0,
        image: 'https://images.unsplash.com/photo-1619286310195-9d8789686f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 167,
        name: 'Sweety Duo',
        price: 45.0,
        image: 'https://images.unsplash.com/photo-1649035570125-fc9c965cc51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 143,
        name: 'Lovers Triple Pack',
        price: 79.0,
        image: 'https://images.unsplash.com/photo-1643312769686-00759ba75d7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 1222,
        name: 'Happy Donas (Pack 3)',
        price: 60.0,
        image: 'https://images.unsplash.com/photo-1606312618475-79449b044093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 1009,
        name: 'Donas Primavera (Edición 2022',
        price: 150.0,
        image: 'https://images.unsplash.com/photo-1602419260650-697189b3d7db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 189,
        name: 'Surtidonas (Pack 4)',
        price: 124.99,
        image: 'https://images.unsplash.com/photo-1597586255676-6b33b6268e33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 198,
        name: 'Season Donut (1 unidad)',
        price: 39.45,
        image: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 177,
        name: 'Mini Donas (Pack 12)',
        price: 130.0,
        image: 'https://images.unsplash.com/photo-1509474520651-53cf6a80536f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
        id: 1977,
        name: 'Donas de Homero (Pack 4)',
        price: 80.0,
        image: 'https://images.unsplash.com/photo-1464347477106-7648bc26261b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
    },
]

export default function MainPage() {
    const [selected, setSelected] = useState<Donut>()

    const selectProduct = (donut: Donut) => setSelected(donut)

    const onCloseModal = () => setSelected(undefined)

    return (
        <>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)',
                }}
            >
                <div className="hero-content text-center text-neutral-content">
                    <div className="card w-10/12 sm:w-full glass">
                        <div className="card-body">
                            <h2 className="card-title text-black text-7xl pixel-donuts">
                                Pixel Donuts
                            </h2>
                            <p className="text-white">
                                Las mejores donas del{' '}
                                <span
                                    className="text-l"
                                    style={{ textDecoration: 'line-through' }}
                                >
                                    país
                                </span>{' '}
                                mundo mundial
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="store bg-white py-8">
                <DonutsList onClick={selectProduct} donuts={products} />
            </div>
            {selected && <ProductModal onClose={onCloseModal} {...selected} />}
        </>
    )
}

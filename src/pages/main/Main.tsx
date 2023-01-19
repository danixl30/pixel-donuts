import { useState } from 'react'
import { Donut, DonutsList } from './componets/DonutsList'
import { ProductModal } from './componets/ModalProduct'
import { products } from '../../common/products'
import { getDonutsContext } from '../../state/donuts/DonutsProvider'

export default function MainPage() {
    const [selected, setSelected] = useState<Donut>()
    const donutsState = getDonutsContext()

    const selectProduct = (donut: Donut) => setSelected(donut)

    const onCloseModal = () => setSelected(undefined)

    const onBuy = () => {
        donutsState.add(selected!!)
        onCloseModal()
    }

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
            {selected && (
                <ProductModal
                    onBuy={onBuy}
                    onClose={onCloseModal}
                    {...selected}
                />
            )}
        </>
    )
}

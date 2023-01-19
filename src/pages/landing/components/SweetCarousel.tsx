import { products } from '../../../common/products'
import { getDonutsContext } from '../../../state/donuts/DonutsProvider'

export type Sweet = {
    id: number
    name: string
    price: string
    description: string
    image: string
}

export type CarouselProps = {
    sweets: Sweet[]
}

const calculateIndexNext = (lenght: number, current: number) => {
    if (current + 1 > lenght) return 1
    return current + 1
}

const calculateIndexPrev = (lenght: number, current: number) => {
    if (current - 1 < 1) return lenght
    return current - 1
}

export const SweetCarousel = (props: CarouselProps) => {
    const donutsState = getDonutsContext()

    const selectObtain = (id: number) => {
        const donut = products.find((e) => e.id === id)
        if (!donut) {
            return
        }
        donutsState.add(donut)
    }

    return (
        <>
            <section className="store bg-white py-8" x-data="products">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <span className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                        Puedes probar...
                    </span>
                </div>
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <div className="carousel w-full">
                        {props.sweets.map((sweet, index, arr) => (
                            <div
                                id={`slide${index + 1}`}
                                className="carousel-item relative w-full"
                            >
                                <div className="hero-content flex-col lg:flex-row px-20 py-10">
                                    <img
                                        src={sweet.image}
                                        className="max-w-sm rounded-lg shadow-2xl"
                                    />
                                    <div>
                                        <h1 className="text-5xl font-bold">
                                            {sweet.name}
                                        </h1>
                                        <p className="py-6">
                                            {sweet.description}
                                        </p>
                                        <button
                                            onClick={() =>
                                                selectObtain(sweet.id)
                                            }
                                            className="btn btn-primary"
                                        >{`Obtener por ${sweet.price}`}</button>
                                    </div>
                                </div>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a
                                        href={`#slide${calculateIndexPrev(
                                            arr.length,
                                            index + 1,
                                        )}`}
                                        className="btn btn-circle"
                                    >
                                        ❮
                                    </a>
                                    <a
                                        href={`#slide${calculateIndexNext(
                                            arr.length,
                                            index + 1,
                                        )}`}
                                        className="btn btn-circle"
                                    >
                                        ❯
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

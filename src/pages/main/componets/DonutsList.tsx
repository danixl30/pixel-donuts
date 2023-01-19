import { ChangeEvent, useEffect, useState } from 'react'

export type Donut = {
    id: number
    name: string
    price: number
    image: string
}
export type DonutsListProps = {
    donuts: Donut[]
    onClick: (product: Donut) => void
}

export const DonutsList = (props: DonutsListProps) => {
    const [filtered, setFiltered] = useState(props.donuts)
    const [key, setKey] = useState('')

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setKey(e.target.value)
    }

    useEffect(() => {
        setFiltered(
            props.donuts.filter((donut) =>
                donut.name.toLowerCase().includes(key.toLowerCase()),
            ),
        )
    }, [key])

    return (
        <div className="store bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                        <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                            Populares de la semana...
                        </a>
                        <div
                            className="flex items-center"
                            id="store-nav-content"
                        >
                            <input
                                type="search"
                                value={key}
                                onChange={onChangeInput}
                                placeholder="¿Qué quieres comer hoy?"
                                className="input input-bordered input-primary input-md w-72"
                            />

                            <a
                                className="pl-3 inline-block no-underline hover:text-black"
                                href="#"
                            >
                                <svg
                                    className="fill-current hover:text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </nav>
                {filtered.map((donut) => (
                    <>
                        <div
                            onClick={() => props.onClick(donut)}
                            key={donut.id}
                        >
                            <div className="w-full md:w-1/3 xl:w-1/4 flex flex-col">
                                <label className="cursor-pointer">
                                    <img
                                        className="hover:grow hover:shadow-lg"
                                        src={donut.image}
                                    />
                                    <div className="pt-3 flex items-center justify-between">
                                        <p className="font-bold">
                                            {donut.name}
                                        </p>
                                    </div>
                                    <p className="pt-1 text-gray-900">
                                        Bs <span>{donut.price}</span>
                                    </p>
                                </label>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

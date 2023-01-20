import { Link, useNavigate } from 'react-router-dom'
import { getDonutsContext } from '../state/donuts/DonutsProvider'

export const Header = () => {
    const navigation = useNavigate()
    const donutsState = getDonutsContext()

    const gotToCart = () => navigation('/cart')

    const totalPrice = donutsState.donuts.reduce(
        (acc, donut) => acc + donut.price,
        0,
    )

    return (
        <>
            <div className="navbar bg-primary text-primary-content px-5">
                <div className="flex-1 w-full">
                    <Link to="/">
                        <span className="TitleFont text-3xl">Pixel Donuts</span>
                    </Link>
                </div>
                <div className="flex-auto">
                    <button className="btn btn-ghost">Productos</button>
                    <button className="btn btn-ghost">Sucursales</button>
                    <button className="btn btn-ghost">Delivery</button>
                    <button className="btn btn-ghost">¿Quienes somos?</button>
                    <button className="btn btn-ghost">Contacto</button>
                </div>
                <div className="flex-none gap-2">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Buscar"
                            className="input input-bordered"
                        />
                        <button className="btn btn-square">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="dropdown dropdown-hover dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-circle btn-outline w-8"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </label>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content w-40 bg-secondary"
                        >
                            <div className="card-body">
                                <span className="font-bold text-lg">
                                    {`Productos: ${donutsState.donuts.length}`}
                                </span>
                                <span className="text">{`Total a pagar: ${totalPrice.toFixed(
                                    2,
                                )} Bs.`}</span>
                                <div className="card-actions">
                                    <button
                                        onClick={gotToCart}
                                        className="btn btn-primary"
                                    >
                                        Ir a caja
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar placeholder"
                        >
                            <div className="bg-secondary w-10 rounded-full">
                                <span className="text-xl">SP</span>
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-secondary rounded-md w-52"
                        >
                            <li>
                                <a>Cuenta</a>
                            </li>
                            <li>
                                <a>Configuración</a>
                            </li>
                            <li>
                                <a>Cerrar Sesión</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

import { Donut } from './DonutsList'
import cn from 'classnames'

export type ProductModalProps = Donut & {
    onClose: () => void
    onBuy: () => void
}

export const ProductModal = (props: ProductModalProps) => {
    const modalClass = cn({
        'modal modal-bottom sm:modal-middle': true,
        'modal-open': true,
    })
    return (
        <>
            <div style={{ opacity: '100%' }} className={modalClass}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{props.name}</h3>
                    <div className="w-24 mask mask-squircle">
                        <img
                            src={props.image}
                            alt={props.name}
                            title={props.name}
                        />
                    </div>
                    <p className="py-4">
                        Precio: Bs{' '}
                        <span className="font-bold">{props.price}</span>
                    </p>
                    <div className="alert alert-info shadow-lg">
                        <div>
                            <button
                                className="btn btn-primary"
                                onClick={props.onBuy}
                            >
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                    <div className="modal-action" onClick={props.onClose}>
                        <label className="btn">Volver</label>
                    </div>
                </div>
            </div>
        </>
    )
}

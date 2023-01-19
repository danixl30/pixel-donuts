import { createContext, ReactNode, useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { Donut } from '../../pages/main/componets/DonutsList'

export type DonutsHandler = {
    add(donut: Donut): void
    remove(id: number): void
    donuts: Donut[]
}

export const DonutContext = createContext<DonutsHandler | undefined>(undefined)

export const getDonutsContext = () => useContext(DonutContext)!!

type DonutsProviderProps = {
    children: ReactNode | ReactNode[]
}

export const DonutsProvider = (props: DonutsProviderProps) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })
    const [donuts, setDonuts] = useState<Donut[]>([])

    const add = (donut: Donut) => {
        Toast.fire({
            icon: 'success',
            title: 'Dona aniadida',
        })
        setDonuts([...donuts, donut])
    }

    const remove = (id: number) => {
        setDonuts(donuts.filter((donut) => donut.id !== id))
        Toast.fire({
            icon: 'success',
            title: 'Dona removida',
        })
    }

    return (
        <>
            <DonutContext.Provider
                value={{
                    add,
                    remove,
                    donuts,
                }}
            >
                {props.children}
            </DonutContext.Provider>
        </>
    )
}

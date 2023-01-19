import { getDonutsContext } from '../../state/donuts/DonutsProvider'
import { Donut } from '../main/componets/DonutsList'
import { DonutsList } from './componets/DonutsList'

export default function CartPage() {
    const donutsState = getDonutsContext()

    const onClickDonut = (donut: Donut) => {
        donutsState.remove(donut.id)
    }

    return (
        <>
            <DonutsList onClick={onClickDonut} donuts={donutsState.donuts} />
        </>
    )
}

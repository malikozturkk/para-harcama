import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../stores/counter"

function Counter() {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>Azalt (-)</button>
            <button onClick={() => dispatch(increment())}>Arttır (+)</button>
            <button onClick={() => dispatch(incrementByAmount(4))}>Arttır (4)</button> <br />
            {count}
        </div>
    )
}

export default Counter
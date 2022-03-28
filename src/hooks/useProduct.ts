import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Producto } from '../interfaces/ProductCard';

export interface useProductProps {
    producto: Producto,
    onChange?: (args: onChangeArgs) => void,
    value?: number
    initialValues?: InitialValues
}

const useProduct = ({producto, onChange, value = 0, initialValues}: useProductProps) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const isMounted = useRef(false)

    const increaseBy = (amount: number) => {

        const newCounter = Math.max(0, counter + amount);
        if(initialValues?.maxCount && newCounter > initialValues?.maxCount) return;
        setCounter(newCounter)
        onChange && onChange({producto, count: newCounter})
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true
    }, [])

    return {
        counter,
        increaseBy,
        reset,
        isMaxReached: () => !!initialValues?.maxCount && counter === initialValues?.maxCount
    }
}

export default useProduct

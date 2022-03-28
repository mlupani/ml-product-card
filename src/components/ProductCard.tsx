import React, { createContext } from 'react';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { InitialValues, onChangeArgs, ProductCardContext, Producto, ProductCardHandlers } from '../interfaces/ProductCard';

export const ProductContext = createContext({} as ProductCardContext);
const { Provider } = ProductContext;

export interface Props {
    //children: React.ReactElement | React.ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element
    producto: Producto,
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: onChangeArgs) => void,
    value?: number
    initialValues?: InitialValues
}

export const ProductCard = ({ children, producto, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, reset, isMaxReached } = useProduct({ producto, onChange, value, initialValues });

    return (
        <Provider value={{ counter, increaseBy, producto, initialValues }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {
                    children({
                        producto,
                        count: counter,
                        maxCount: initialValues?.maxCount,
                        increaseBy,
                        reset,
                        isMaxReached
                    })
                }
            </div>
        </Provider>
    )
}

export default ProductCard

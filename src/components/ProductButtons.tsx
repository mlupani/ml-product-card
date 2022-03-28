import React, { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string,
    style?: React.CSSProperties
}

export const ProductButtons = ({className, style}: Props) => {

    const { increaseBy, counter, initialValues } = useContext(ProductContext)
    const isMaxReached = useCallback(
      () => !!initialValues?.maxCount && counter === initialValues.maxCount,
      [counter, initialValues?.maxCount],
    )

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button disabled={isMaxReached() ? true : false} className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabled : null}`} onClick={() => increaseBy(+1)}>+</button>
        </div>
    )
}
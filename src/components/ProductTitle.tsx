import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    title?: string;
    style?: React.CSSProperties;
}

export const ProductTitle = ({title, className= '', style} : Props) => {

    const { producto } = useContext(ProductContext);
    let titleToShow = title ? title : producto.title;

    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>{titleToShow}</span>
    )
}
import React, { useContext } from "react";
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductImage = ({img = '', className, style}: Props) => {

    const { producto } = useContext(ProductContext);
    let imageToShow;

    if (img) {
        imageToShow = img;
    } else if (producto.img) {
        imageToShow = producto.img;
    } else {
        imageToShow = noImage;
    }

    return (
        <img className={`${styles.productImg} ${className}`} src={imageToShow} alt="Product" style={style} />
    )
}
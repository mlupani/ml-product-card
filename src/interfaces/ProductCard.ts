import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';


export interface Producto {
    id: number;
    title: string;
    img?: string;
}

export interface ProductCardContext {
    counter: number;
    increaseBy: (id: number) => void;
    producto: Producto;
    value?: number;
    initialValues?: InitialValues;
}

export interface ProductCardHOCProps {
    (Props: ProductCardProps) : JSX.Element,
    Title: (Props : ProductTitleProps) => JSX.Element,
    Image: (Props : ProductImageProps) => JSX.Element,
    Buttons: (Props : ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    producto: Producto;
    count: number;
}

export interface ProductInCart extends Producto {
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    maxCount?: number;
    producto: Producto;
    count: number;
    isMaxReached: () => boolean;
    increaseBy: (id: number) => void;
    reset: () => void;
}
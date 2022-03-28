import { useState } from "react"
import { onChangeArgs, ProductInCart } from "../interfaces/ProductCard"

export const useShoppingCart = () => {
    const [shopingCart, setShopingCart] = useState<{[key: string] : ProductInCart}>({})

    const handleShoppingCart = ({producto, count}: onChangeArgs) => {

        setShopingCart(prev => {

            let newCart

            if(count === 0){
                const { [producto.id]: toDelete, ...rest } = prev
                newCart = rest
            }else{
                newCart = {
                    ...prev,
                    [producto.id]: { ...producto, count }
                }
            }

            return newCart
        })
    }

    return {
        shopingCart,
        handleShoppingCart
    }
}
# Product-Card

### Ejemplo de paquete para subir a npm

## Example

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ml-product-card'

<ProductCard
    producto={product}
    initialValues={{
    count: 4,
    maxCount: 10
}}>
    {
        ({reset, count, increaseBy, isMaxReached, maxCount}) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```


### Miguel Angel Lupani
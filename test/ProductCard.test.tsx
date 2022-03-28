import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../src/components';
import { product1 } from './data/products';

const { act } = renderer;

describe('productCard', () => {

  it('render productCard with product title', () => {
    const wrapper = renderer.create(<ProductCard producto={product1}>{() => <h1>Producto</h1>}</ProductCard>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('test funcionality of counter' , () => {
    const wrapper = renderer.create(
        <ProductCard producto={product1}>
            {
                ({count, increaseBy}) => (
                    <>
                        <h1>Producto</h1>
                        <span>{count}</span>
                        <button onClick={() => increaseBy(1)}></button>
                    </>
                )
            }
        </ProductCard>);
        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
        act(() => {
            (tree as any).children[2].props.onClick()
        });
        tree = wrapper.toJSON();
        expect((tree as any).children[1].children[0]).toBe('1')

  })
});

import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../src/components';
import { product2 } from './data/products';

describe('productImage', () => {

  it('renders the UI as expected', () => {
    const wrapper = renderer.create(<ProductImage img='https://hola.jpg'/>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('render productCard with no-Image', () => {
    const wrapper = renderer.create(<ProductCard producto={product2}>{() => <ProductImage />}</ProductCard>).toJSON();
    expect(wrapper).toMatchSnapshot();
  })
});

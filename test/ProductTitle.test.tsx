import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../src/components';
import { product1 } from './data/products';

describe('productTitle', () => {
  it('renders the UI as expected', () => {
    const wrapper = renderer.create(<ProductTitle title={'Custom Product'} className={'Custom-class'} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('render productCard with product title', () => {
    const wrapper = renderer.create(<ProductCard producto={product1}>{() => <ProductTitle/>}</ProductCard>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

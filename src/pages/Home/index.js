import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'
import api from '../../services/api'

import * as CartActions from '../../store/modules/cart/action'

import { formatPrice } from '../../util/format'

import { ProductList } from './styles';

export default function Home(props) {
  const [products, setProducts] = useState([])
  const amount = useSelector(state => state.cart.reduce((sunAmount, product) => {
    sunAmount[product.id] = product.amount;

    return sunAmount
  }, {}))

  const dispatch = useDispatch()

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products')

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))
      setProducts(data)
    }

    loadProducts()

  }, [])

  const handleAddProduct = id => {
    dispatch(CartActions.addToCartRequest(id))
    // props.history.push('/cart')
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="FFF" />{''}
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

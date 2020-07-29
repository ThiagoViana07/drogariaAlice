import React from 'react';
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart } from './styles';
import Logo from '../../assets/images/logo.svg'
import Logo2 from '../../assets/images/drogariaAlice2.svg'
import Logo3 from '../../assets/images/drogariaAlice2.png'



export default function Header() {
  const cartSize = useSelector(state => state.cart.length)
  return (
    <Container>
      <Link to="/">
        <img src={Logo3} alt="" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

import React from 'react'

import CartLogo from '../../assets/6 799268928catImg.svg'
import { CartItems, CartResume } from '../../components'
import { Container, CartImg, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="Logo da carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}

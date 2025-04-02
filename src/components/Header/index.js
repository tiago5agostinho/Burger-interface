import React from 'react'
import { useHistory } from 'react-router-dom'

import Person from '../../assets/Frame 80person.svg'
import Cart from '../../assets/Framecart.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRigt,
  ContainerText,
  Line,
  PageLinkExit
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRigt>
        <PageLink>
          <img src={Cart} alt="carrinho" onClick={() => push('/carrinho')} />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="logo-pessoa" />
        </PageLink>
        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRigt>
    </Container>
  )
}

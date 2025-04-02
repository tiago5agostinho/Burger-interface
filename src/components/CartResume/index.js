import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formalCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTex] = useState(5)

  const { cartProducts } = useCart()

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantify: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando seu pedido',
      success: 'Pedido realizado com sucesso',
      error: 'Falha ao tentar realizar o seu pedido '
    })
  }

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts])

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tex">Taxa de entrega</p>
          <p className="delivery-tex-price">{formatCurrency(deliveryTex)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTex)}</p>
        </div>
      </Container>
      <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>
        Finalizar pedido
      </Button>
    </div>
  )
}

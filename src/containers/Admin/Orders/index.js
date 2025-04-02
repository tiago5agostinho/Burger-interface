import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatDate from '../../../utils/formatDate'
import status from './orders-status'
import Row from './row'
import { Container, LinkMenu, Menu } from './styles'

function Orders() {
  const [orders, setOrders] = useState([])
  const [filterRedOrders, setFilterRedOrders] = useState([])
  const [activeStstus, setActiveStstus] = useState(1)

  const [rows, setRows] = useState([])
  console.log(orders)

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders')

      setOrders(data)
      setFilterRedOrders(data)
    }

    loadOrders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      OrderId: order._id,
      data: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filterRedOrders.map(ord => createData(ord))
    setRows(newRows)
  }, [filterRedOrders])

  useEffect(() => {
    if (activeStstus === 1) {
      setFilterRedOrders(orders)
    } else {
      const statusIndex = status.findIndex(sts => sts.id === activeStstus)
      const newFilterRedOrders = orders.filter(
        order => order.status === status[statusIndex].value
      )
      setFilterRedOrders(newFilterRedOrders)
    }
  }, [orders])

  function handleStatus(status) {
    if (status.id === 1) {
      setFilterRedOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)
      setFilterRedOrders(newOrders)
    }
    setActiveStstus(status.id)
  }

  return (
    <Container>
      <Menu>
        {status &&
          status.map(status => (
            <LinkMenu
              key={status.id}
              onClick={() => handleStatus(status)}
              isActiveStatus={activeStstus === status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row
                key={row.OrderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders

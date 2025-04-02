import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../../constants/path'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formalCurrency'
import { Container, Img, EditIcon } from './styles'

function ListProducts() {
  const [products, setProducts] = useState()
  const { push } = useHistory()
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadOrders()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckCircleOutlineIcon style={{ color: '#228822' }} />
    }
    return <CloseOutlinedIcon style={{ color: '#cc1717' }} />
  }

  function editproduct(product) {
    push(paths.EditProduct, { product })
  }
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome </TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Produto em oferta</TableCell>
              <TableCell align="center">Imagem</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell>
                    {
                      <Img
                        align="center"
                        src={product.url}
                        alt="imagem-produto"
                      />
                    }
                  </TableCell>
                  <EditIcon onClick={() => editproduct(product)} />
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts

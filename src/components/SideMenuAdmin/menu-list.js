import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp'

import paths from '../../constants/path'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: LocalMallOutlinedIcon
  },
  {
    id: 2,
    label: 'Listar-produtos',
    link: paths.Products,
    icon: ShoppingCartCheckoutSharpIcon
  },
  {
    id: 3,
    label: 'Novo-produto',
    link: paths.NewProduct,
    icon: OpenInNewOutlinedIcon
  }
]

export default listLinks

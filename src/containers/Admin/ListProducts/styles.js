import editIcon from '@mui/icons-material/BorderColorOutlined'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const Img = styled.img`
  width: 70px;
  border-radius: 5px;
`
export const EditIcon = styled(editIcon)`
  cursor: pointer;
  color: #323d5d;
`

import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    background-color: #9758a6;
    color: #efefef;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`
export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  margin-top: 16px;
  border-radius: 8px;
  background: #9758a6;

  height: 50px;
  border: none;

  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.3;
  }

  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 25px;

    background: #565656;
    border-radius: 10px;
    padding: 30px;
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border: none;
  min-width: 280px;
  padding-left: 10px;
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 25px;
`
export const LabelUploud = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`

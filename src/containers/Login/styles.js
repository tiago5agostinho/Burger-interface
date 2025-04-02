import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 130vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 90%;
`

export const ContainerItens = styled.div`
  border-radius: 0 10px 10px 0;
  background: #373737;
  height: 90%;
  padding: 55px 60px 25px 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #fff;

    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 60px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  margin-top: 16px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.416px;
  height: 38.19px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 10px;
`

export const Button = styled.button`
  width: 182.81px;
  height: 36.129px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  color: #eee;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  margin-top: 75px;
  margin-bottom: 25px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`

export const SignInLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`

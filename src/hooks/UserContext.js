import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'
const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async userInfo => {
    setUserData(userInfo)

    await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
  }

  const logout = async () => {
    await localStorage.removeItem('codeburger:userData')
  }

  useEffect(() => {
    const loadUserDate = async () => {
      const clientInfo = await localStorage.getItem('codeburger:userData')

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }
    }

    loadUserDate()
  }, [])
  return (
    <UserContext.Provider value={{ userData, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('User must be used with UserContext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}

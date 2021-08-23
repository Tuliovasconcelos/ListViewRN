import React, { createContext, useReducer } from 'react'
import users from '../data/users'

//criando o context
const UsersContext = createContext({})

//Criar como componente retornando 
export const UsersProvider = props => {

    return (
        <UsersContext.Provider value={{
            state: {
                users
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext

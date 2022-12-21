import React, {useState} from 'react'

const Context = React.createContext()

function ContextProvider (props){

    const [scrolled, setScrolled] = useState(null)

    return (
        <Context.Provider value={{scrolled, setScrolled}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}
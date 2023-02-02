import React, { FC, createContext } from 'react'

const Context = createContext<unknown>()

interface Props{
    children: object
}

function ContextProvider(props: FC<Props>) {

    async function Movies(){
        const res = await fetch('https://imdb-api.com/API/Search/k_oabv64kw/deadpool')
        const data = await res.json()
        console.log(data.results)
        const allID = data.results.map(val => {
            return val.id
        })
        console.log(allID)
        const newData = data.results.map(val => {
            return {
                title: val.title,
                image: val.image,
                desc: val.description
            }
        })
        return newData
    }

  return (
    <Context.Provider value={Movies}>
        {props.children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}

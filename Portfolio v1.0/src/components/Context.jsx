import { useState } from "react";
import React from 'react';
import { createContext } from "react";

const Context = createContext()

function ContextProvider(props){ 

    return (
        <Context.Provider value="">
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}
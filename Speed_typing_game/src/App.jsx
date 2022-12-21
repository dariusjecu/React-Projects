import React, {useState, useEffect} from 'react'
import useGame from "./useGame"

export default function App() {

    const [buttonOn, text, ChangeText, time, StartGame, words] = useGame(20)

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea disabled={buttonOn ? false : true} value={text} onChange={ChangeText}/>
            <h4>Time remaining: {time}</h4>
            <button disabled={buttonOn} onClick={StartGame}>Start</button>
            <h1>Word count: {!buttonOn && words>0 ? words : "???"}</h1>
        </div>
    )
}
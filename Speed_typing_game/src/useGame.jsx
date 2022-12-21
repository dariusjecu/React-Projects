import {useState, useEffect} from "react"

export default function useGame(timer = 5){

    const [text, setText] = useState("")
    const [time, setTime] = useState(timer)
    const [words, setWords] = useState(0)
    const [buttonOn, setButtonOn] = useState(false)

    function ChangeText(event){
        setText(event.target.value)
    }

    function StartGame(){
        setText("")
        setTime(timer)
        setButtonOn(true)
    }

    function Count(){
        let count = 0
        for(let i=0; i<text.length-1; i++)
            if(text[i]!=" " && text[i+1]==" ")
                count++
        if(text[text.length-1]!=" ")
            count++
        return count
    }

    useEffect(() => {
        setTimeout(() => {
            if(buttonOn && time>0)
                setTime(val => val - 1)
            else if(time == 0)
                {
                    setButtonOn(false)
                    setWords(Count())
                }
        }, 1000);
    }, [buttonOn, time])

    return [buttonOn, text, ChangeText, time, StartGame, words]

}
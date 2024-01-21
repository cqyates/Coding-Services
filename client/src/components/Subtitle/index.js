
import {useState} from "react"

const Subtitle = () => {
  const phraseArray = ["Software Developer", "MERN Stack Expert", "Javascript Tutor", "Debugger"]
  const [phrase, setPhrase] = useState(phraseArray[0])
  const [position, setPosition] = useState()
  const cyclePhrase = () => {
    setTimeout(function(){
      setPosition(Math.floor(Math.random()* phraseArray.length))
      setPhrase(phraseArray[position])
    }, 2000)
  }

  cyclePhrase()
  return (
    <h3 style={{marginTop: "10px",}}>{phrase}</h3>
  )
}

export default Subtitle;
import "./show.css"
import {AiFillStar} from "react-icons/ai"
import {BsPlayCircle} from "react-icons/bs"

interface Props{
    rating: number,
    title: string,
    image: string,
    trailer_id: string
}

function Show(props: Props) {

  return (
    <div className="show">
      <img src={props.image} alt="" />
      <div className="rat">
        <AiFillStar style={{width: "fit-content", height: "fit-content", margin: "0"}}/>
        <p>{props.rating}</p>
      </div>
      <h3>{props.title}</h3>
      <div className="tra">
        <BsPlayCircle/>
        <h3>Trailer</h3>
      </div>
    </div>
  )
}

export default Show

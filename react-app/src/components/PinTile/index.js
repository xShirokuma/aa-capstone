import { Link } from "react-router-dom"
import { SaveButton } from "../../components"
import "./PinTile.css"

const PinTiles = ({ pin }) => {
  return (
    <>
      <Link to={`/pin/${pin.id}`} className="pin-tile" key={pin.id}>
        <img src={pin.image} alt={"pin"}></img>
      </Link>
      <SaveButton pin={pin} />
    </>
  )
}

export default PinTiles

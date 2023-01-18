import dataDishes from "../../data/dataDishes"
import Dish from "./Dish"

function Dishes() {
  return (
    <div>
        {dataDishes.map(dish => <Dish dish={dish}/>)}
    </div>
  )
}

export default Dishes
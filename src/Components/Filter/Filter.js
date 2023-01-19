import { useSelector } from "react-redux"
import { getSelectedCategory } from "../../redux/dishesSlice"

function Filter({category}) {

const selectedCategory = useSelector(getSelectedCategory); // hook that allows us to read our state

// import getSelectedCategory from dishesSlice

  return (
    <p className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>
        {category}
    </p>
  )
}

export default Filter
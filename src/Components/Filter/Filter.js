import { useDispatch, useSelector } from "react-redux"
import { getSelectedCategory, filterCategory } from "../../redux/dishesSlice"

function Filter({category}) {
const dispatch = useDispatch();
const selectedCategory = useSelector(getSelectedCategory); // hook that allows us to read our state

// import getSelectedCategory from dishesSlice

  return (
    <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>
        {category}
    </p>
  )
}

export default Filter
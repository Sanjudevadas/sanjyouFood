import food1 from './food1.jpg'

const RestaurentCard = () => {
  return (
    <div className="res-card">
    <img src={food1} alt="" />
    <h3>Meghna Foods</h3>
    <h4>North Indian Biriyani</h4>
    <h5>⭐4.3</h5>
    </div>
  )
}

export default RestaurentCard
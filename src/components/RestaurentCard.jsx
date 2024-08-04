import food1 from './food1.jpg'
import PropTypes from 'prop-types'

const RestaurentCard = (props) => {
  return (
    <div className="res-card">
    <img src={food1} alt="" />
    <h3>{props.resName}</h3>
    <h4>{props.cuisine}</h4>
    <h5>⭐4.3</h5>
    </div>
  )
}
RestaurentCard.propTypes = {
    resName: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
  };

export default RestaurentCard
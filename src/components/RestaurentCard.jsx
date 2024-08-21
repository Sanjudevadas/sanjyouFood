import { CON_URL } from '../utils/constants';
import PropTypes from 'prop-types';

const RestaurentCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img className="res-logo" src={`${CON_URL}${resData.cloudinaryImageId}`} alt={resData.name} />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(', ')}</h4>
      <h5>{`${resData.areaName}, ${resData.locality}`}</h5>
      <h6>
        <span className="rating">
          <span className="rating-star">⭐</span>{resData.avgRating}
        </span>
       : 💵  {resData.costForTwo} : 🕛 {resData.sla.deliveryTime} mins
      </h6>
     
    </div>
  );
};

RestaurentCard.propTypes = {
  resData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cloudinaryImageId: PropTypes.string.isRequired,
    cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
    avgRating: PropTypes.number.isRequired,
    areaName: PropTypes.string.isRequired,
    locality: PropTypes.string.isRequired,
    sla: PropTypes.shape({
      deliveryTime: PropTypes.number.isRequired
    }).isRequired,
    costForTwo: PropTypes.string.isRequired, // Add this line
  }).isRequired
};

export default RestaurentCard;

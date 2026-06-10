import PropTypes from 'prop-types';

ItemMenu.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export const ItemMenu = ({ item, onClick }) => {
  return (
    <div className="item-menu" onClick={onClick}>   
        <div className="item-menu__icon">
            {item.icon}
        </div>
        <div className="item-menu__name">   
            {item.name}
        </div>
    </div>
  );
}
import PropTypes from 'prop-types';
import style from "./style.module.css";
import { Link } from 'react-router-dom';

export const ItemMenu = ({ titulo, icon, pagina }) => {

  return (
    <Link to={pagina} className={style.itemMenu} title={titulo}>   
        <div className={style.itemMenuIcon}>
            {icon}
        </div>

        <div className={style.itemMenuName}>   
            {titulo}
        </div>
    </Link>
  );
}

ItemMenu.propTypes = {
  titulo: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  pagina: PropTypes.string.isRequired,
};
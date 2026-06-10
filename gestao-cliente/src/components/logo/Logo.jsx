import './style.module.css';
import style from './style.module.css';
import LogoTipo from '../../assets/logo.jpg';
import PropTypes from 'prop-types';

Logo.propTypes = {
    texto: PropTypes.string.isRequired
}

export default function Logo({ texto }) {
    return (
        <div className={style.logo}>
            <img src={LogoTipo} alt="Logo" />
            <span>{texto}</span>
        </div>
    )
}           
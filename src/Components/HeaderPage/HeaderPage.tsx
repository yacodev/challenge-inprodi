import weatherIcon from '../../assets/weather-icon.svg';
import './headerPage.scss';

export const HeaderPage = () => {
  return (
    <nav className='header__container'>
      <div className='header__container--logo'>
        <img src={weatherIcon} alt='logo' />
      </div>
      <div className='header__container--title'>
        <span className='header__container--title-text'>Weather App</span>
      </div>
    </nav>
  );
};

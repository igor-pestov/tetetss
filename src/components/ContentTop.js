import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../img/sberLogo.svg';
import sberLogoAnimated from '../img/sberLogoAnimated.svg';
import './ContentTop.scss';

const ContentTop = (e) => {
  const [checkedLang, setChecedLang] = useState(localStorage.getItem('lang'));
  const changedLanguage = (e) => {
    localStorage.setItem('lang', e);
    setChecedLang(e);
  };
  const { t, i18n } = useTranslation();
  const [width, setWidth] = useState();
  useEffect(() => {
    i18n.changeLanguage(checkedLang);
  }, [checkedLang, i18n]);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);
  const scroll = () => {
    if (width < 800) {
      window.scrollTo({ top: 1100, left: 0, behavior: 'smooth' });
    } else window.scrollTo({ top: 1500, left: 0, behavior: 'smooth' });
  };
  return (
    <div className='content-top'>
      <div className='content-top_head'>
        <img src={logo} alt='' className='content-top_logo' />
        {checkedLang === 'rus' ? (
          <button id='eu' onClick={(e) => changedLanguage(e.target.id)}>
            EN
          </button>
        ) : (
          <button id='rus' onClick={(e) => changedLanguage(e.target.id)}>
            RUS
          </button>
        )}
      </div>
      <div className='content-top_body'>
        <div className='content-top_body_text'>
          <div className='content-top_body_gardient-text'>
            <h2>{t('Титульный партнер ПМЭФ’21')}</h2>
          </div>
          <p>{t('2 июня - 5 июня 2021 год')}</p>
          <button onClick={() => scroll()}>
            {t('Смотреть программу')}
          </button>
        </div>
        <div className='content-top_body_animated'>
          <img
            className='content-top_body_animated-logo'
            src={sberLogoAnimated}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default ContentTop;

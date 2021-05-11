import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import ContentTop from '../components/ContentTop';
import ContentCard from '../components/ContentCard';
import Timetable from '../components/Timetable';
import TimetableTabs from '../components/TimetableTabs';
import ImageShow from '../components/ImageShow';
import circle from '../img/circle.svg';
import backGround from '../img/bg.svg';
import './Announcement.scss';


const Announcement = () => {
  const [screenSize, setSize] = useState(window.innerWidth);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='announcement'>
      <div className='announcement_container'>
        <ContentTop />
        <ContentCard>
          <p>
            <b>{t('Сбер')}</b> {t('Content-card_text1')}
            <a target="_blank" href='https://www.sber.ru/conf' rel="noreferrer">{t('ecosystem')}</a> 
            {t('Content-card_text2')}
          </p>
        </ContentCard>
        <div className='announcement_timetable'>
          <h2>{t('Деловая программа Сбера на ПМЭФ')}</h2>
          {screenSize > 768 ? <Timetable /> : <TimetableTabs />}
        </div>
        <ImageShow />
        <img
          src={backGround}
          alt=''
          className='announcement_background_image'
        />
        <img src={circle} alt='' className='announcement_background_circle' />
        <img src={circle} alt='' className='announcement_background_circle_2' />
      </div>
      <Footer />
    </div>
  );
};

export default Announcement;

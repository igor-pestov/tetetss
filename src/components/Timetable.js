import React from 'react';
import { useTranslation } from 'react-i18next';
import header1 from '../img/timeTableHeaders/1.svg';
import header2 from '../img/timeTableHeaders/2.svg';
import header3 from '../img/timeTableHeaders/3.svg';
import header4 from '../img/timeTableHeaders/4.svg';
import './Timetable.scss';

const TimeTableBlock = ({events, day, image}) => {
  return (
    <div className='timetable-block'>
      <img className='timetable-block_header_image' src={image} alt='' />
      <div className='timetable-block_header'>
        <span className='timetable-block_header_day'>{day}</span>
      </div>
      {
        events.map((e, i) => {
          return (
            <div key={`timeblock${i}`} className='timetable-block_event'>
              <p className='time'>{e.time}</p>
              <p>{e.label}</p>
            </div>
          )
        })
      }
    </div>
  );
}

const Timetable = () => {
  const { t } = useTranslation();

  const events = [
    {
      time: '08:00',
      label: t('Форум МСП'),
    },
    {
      time: '14:00',
      label: t('Форум лекарственной безопасности'),
    },
    {
      time: '19:00 – 23:00',
      label: t('Прием Оргкомитета Форума'),
    },
  ];

  const events2 = [
    {
      time: '09:00 – 10:15',
      label: t('Сессия Л.А. Хасиса “Венчурная экономика развивающихся стран”'),
    },
    {
      time: '11:00 – 12:15',
      label: t('Сессия С.К.Кузнецова Безопасное развитие экосистем – что лежит в основе?'),
    },
    {
      time: '13:00 – 14:00',
      label: t('Официальное открытие форума'),
    },
    {
      time: '15:00 – 16:15',
      label: t('Панельная сессия с участием Президента, Председятеля правления Г.О. Грефа'),
    },
    {
      time: '20:00 – 23:00',
      label: t('Вечерний прием Сбера/Концерт на Дворцовой площади'),
    },
  ];
  const events3 = [
    {
      time: '08:30 – 20:00',
      label: t('Деловой завтрак Сбера'),
    },
    {
      time: '08:00',
      label: t('Сессия А.А. Ведяхина “Art.Creativity.AI” '),
    },
    {
      time: '19:00 – 23:00',
      label: t('Пленарная сессия с участием Президента РФ'),
    },
  ];

  return (
    <div className='timetable'>
      <TimeTableBlock day='2 июня' events={events} image={header1} />
      <TimeTableBlock day='3 июня' events={events2} image={header2} />
      <TimeTableBlock day='4 июня' events={events3} image={header3} />
      <TimeTableBlock day='5 июня' events={events2} image={header4} />
    </div>
  );
}

export default Timetable;
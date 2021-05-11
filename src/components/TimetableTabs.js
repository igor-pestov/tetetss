import React, { useState } from 'react';
import './TimetableTabs.scss';

const events = {
  day: '2 июня',
  events: [
    {
      time: '08:00',
      label: 'Форум МСП',
    },
    {
      time: '14:00',
      label: 'Форум лекарственной безопасности',
    },
    {
      time: '19:00 – 23:00',
      label: 'Прием Оргкомитета Форума',
    },
  ],
};

const events2 = {
  day: '3 июня',
  events: [
    {
      time: '09:00 – 10:15',
      label: 'Сессия Л.А. Хасиса “Венчурная экономика развивающихся стран”',
    },
    {
      time: '11:00 – 12:15',
      label:
        'Сессия С.К.Кузнецова "Безопасное развитие экосистем — что лежит в основе?"',
    },
    {
      time: '13:00 – 14:00',
      label: 'Официальное открытие форума',
    },
    {
      time: '15:00 – 16:15',
      label:
        'Панельная сессия с участием Президента, Председятеля правления Г.О. Грефа',
    },
    {
      time: '20:00 – 23:00',
      label: 'Вечерний прием Сбера/Концерт на Дворцовой площади',
    },
  ],
};

const events3 = {
  day: '4 июня',
  events: [
    {
      time: '08:30 – 10:00',
      label: 'Деловой завтрак Сбера',
    },
    {
      time: '12:00 – 13:15',
      label: 'Сессия А.А. Ведяхина «Art.Creativity.Al»',
    },
  ],
};

const events4 = {
  day: '5 июня',
  events: [
    {
      time: '09:00 – 10:15',
      label: 'Сессия Л.А. Хасиса “Венчурная экономика развивающихся стран”',
    },
    {
      time: '11:00 – 12:15',
      label:
        'Сессия С.К.Кузнецова Безопасное развитие экосистем – что лежит в основе?',
    },
    {
      time: '13:00 – 14:00',
      label: 'Официальное открытие форума',
    },
    {
      time: '15:00 – 16:15',
      label:
        'Панельная сессия с участием Президента, Председятеля правления Г.О. Грефа',
    },
    {
      time: '20:00 – 23:00',
      label: 'Вечерний прием Сбера/Концерт на Дворцовой площади',
    },
  ],
};

const TimetableTabs = () => {
  const [activeTab, setActiveTab] = useState('2 июня');
  const [eventsState, setEvents] = useState(events);

  const handleClick = (day) => {
    setActiveTab(day);

    const daySelected = Number.parseInt(day);
    let elem = document.getElementsByClassName('timetable-tabs_buttons');

    if (daySelected === 5) {
      elem[0].scrollTo({ left: 100, behavior: 'smooth' });
    }
    if (daySelected === 2) {
      elem[0].scrollTo({ left: -100, behavior: 'smooth' });
    }
    switch (daySelected) {
      case 2:
        setEvents(events);
        break;
      case 3:
        setEvents(events2);
        break;
      case 4:
        setEvents(events3);
        break;
      default:
        setEvents(events4);
    }
  };

  const days = ['2 июня', '3 июня', '4 июня', '5 июня'];

  return (
    <div className='timetable-tabs'>
      <div className='timetable-tabs_buttons'>
        {days.map((e, i) => (
          <button
            onClick={() => handleClick(e)}
            key={`timebutton${i}`}
            className={`timetable-tabs_button ${activeTab === e && 'active'}`}
          >
            {e}
          </button>
        ))}
      </div>
      <div className='timetable-tabs_table'>
        {eventsState.events.map((e, i) => (
          <div key={`timerow${i}`} className='timetable-tabs_table_row'>
            <span>{e.time}</span>
            <p className='text'>{e.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimetableTabs;

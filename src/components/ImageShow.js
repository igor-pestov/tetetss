import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './ImageShow.scss';
import PhotoSliderv3 from './PhotoSliderv3';
import Group from '../img/Group.js';
import { data } from '../data.json';
import { useTranslation } from 'react-i18next';
const ImageShow = () => {
  const [history, setHistory] = useState(data[11]);
  const [years, setYears] = useState([]);
  const [choise, setChoise] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setYears(
      data.map((el, i) => {
        if (i < 3) {
          return {
            visible: true,
            year: el.year,
            pos: i,
            style: `year pos` + i,
          };
        }
        if (i >= 3 && i < 8)
          return {
            visible: false,
            pos: i,
            year: el.year,
            style: `year pos` + i,
          };
        if (i >= 8)
          return {
            visible: true,
            year: el.year,
            pos: i,
            style: `year pos` + i,
          };
      })
    );
  }, [data]);
  const handelYearInc = (date) => {
    const newYears = years.map((el, i) => {
      const { pos } = el;
      return {
        visible: true,
        year: el.year,
        pos: pos >= 11 ? 0 : pos + 1,
        style: pos >= 11 ? `year pos` + 0 : `year pos` + (pos + 1),
      };
    });
    setYears(newYears);
    setChoise(date.year);
    setHistory(data.find((el) => el.year === +date.year));
  };
  const handelYearDec = (date) => {
    const newYears = years.map((el, i) => {
      const { pos } = el;
      return {
        visible: true,
        year: el.year,
        pos: pos === 0 ? 11 : pos - 1,
        style: pos === 0 ? `year pos` + 11 : `year pos` + (pos - 1),
      };
    });
    setYears(newYears);
    setChoise(date.year);
    setHistory(data.find((el) => el.year === +date.year));
  };

  return (
    <div className='imageshow'>
      <Group />
      <div className='group-years'>
        {years.map((el, i) => {
          const { pos, year, style } = el;
          return (
            <div
              id={year}
              className={style}
              onClick={(e) => {
                style === `year pos0` && handelYearDec(el);
                style === `year pos10` && handelYearInc(el);
              }}
            >
              {year}
            </div>
          );
        })}
      </div>

      <div className='block-text-photo'>
        <div className='imageshow-text'>
          <h2>История Сбера на ПМЭФ</h2>
          <p>{t(history.year)}</p>
        </div>
        <PhotoSliderv3 year={history.year} />
      </div>
    </div>
  );
};

export default ImageShow;

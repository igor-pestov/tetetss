import React from 'react';
import './ImageShow.scss';
import PhotoSliderv3 from './PhotoSliderv3';
import Group from '../img/Group.js';
const ImageShow = () => {
  return (
    <div className='imageshow'>
      <Group />
      <div className="block-text-photo">
        <div className='imageshow-text'>
          <h2>История Сбера на ПМЭФ</h2>
          <p>
            В дискуссии «Трансформация в быстро меняющемся мире: государства,
            компании, люди» приняли участие первый заместитель руководителя
            администрации Президента РФ Сергей Кириенко, мэр Москвы Сергей
            Собянин, председатель совета правления и исполнительного комитета
            Royal Philips Франс ван Хаутен.Также Сбербанк провел ряд сессий о
            кибербезопасности в условиях глобальной диджитализации.
          </p>
        </div>
        <PhotoSliderv3 />
      </div>
    </div>
  );
};

export default ImageShow;

import React, { useState, useRef, useEffect } from 'react';
import { Slider as MUISlider } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import xIcon from '../img/x.svg';
import './PhotoSliderv3.scss';

const PhotoButton = ({ e, i, setOpen, setIndex, qwert, scroll }) => {
  const handlePlusClick = (index) => {
    if (qwert == scroll) {
      setOpen(true);
      setIndex(index);
    }
  };

  return (
    <div key={`photo${i}`} className='photo-slider_slide'>
      <img src={e} alt='' onClick={() => handlePlusClick(i)} />
    </div>
  );
};

const PhotosModal = ({ open, setOpen, photos, index, setIndex, year }) => {
  const handleClick = (e, dest) => {
    dest === 'back'
      ? index !== 0 && setIndex(index - 1)
      : index < photos.length - 2 && setIndex(index + 1);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div onMouseDown={(e) => e.preventDefault()} className='photos-modal'>
        <div className='photos-modal_header'>
          <h2>{year}</h2>
          <img src={xIcon} alt='' onClick={() => setOpen(false)} />
        </div>
        <div className='photos-modal_current'>
          <button onClick={(e) => handleClick(e, 'back')}>
            <p class='arrow'></p>
          </button>
          <img src={photos[index]} alt='' />
          <button onClick={(e) => handleClick(e, '')}>
            <p class='arrow'></p>
          </button>
        </div>
        <div className='photos-modal_all-photos'>
          {photos.map((e, i) => (
            <img
              className={`photos-modal_menu ${index === i && 'active'}`}
              src={e}
              alt=''
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

const PhotoSliderv3 = ({ year }) => {
  const ref = useRef();
  const container = useRef();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [qwert, setQwert] = useState(0);
  const [photos, setPhotos] = useState([
    `/img/Photos/${year}/1.jpg`,
    `/img/Photos/${year}/2.jpg`,
    `/img/Photos/${year}/3.jpg`,
    `/img/Photos/${year}/4.jpg`,
    `/img/Photos/${year}/5.jpg`,
    '',
  ]);
  useEffect(() => {
    setPhotos([
      `/img/Photos/${year}/1.jpg`,
      `/img/Photos/${year}/2.jpg`,
      `/img/Photos/${year}/3.jpg`,
      `/img/Photos/${year}/4.jpg`,
      `/img/Photos/${year}/5.jpg`,
      '',
    ]);
    setScroll(0);
    setIndex(0);
    setMaxScroll(0);
    ref.current.scrollTo(0, 0);

    const maxScroll = () => {
      if (container)
        setMaxScroll(
          container.current.scrollWidth - container.current.clientWidth
        );
    };
    if (container) maxScroll();
    window.addEventListener('resize', maxScroll);
    return window.removeEventListener('resize', maxScroll);
  }, [year]);

  useEffect(() => {
    const maxScroll = () => {
      if (container)
        setMaxScroll(
          container.current.scrollWidth - container.current.clientWidth
        );
    };
    if (container) maxScroll();
    window.addEventListener('resize', maxScroll);
    return window.removeEventListener('resize', maxScroll);
  }, []);
  const handleScroll = () => {
    setScroll(ref.current.scrollLeft);
  };

  const handleSlider = (value) => {
    ref.current.scrollTo(value, 0);
  };

  const handleMouse = (e) => {
    if (e.buttons)
      ref.current.scrollTo(ref.current.scrollLeft + e.movementX * -1 * 2, 0);
  };
  const test = (e) => {
    e.preventDefault();
    setQwert(scroll);
  };
  return (
    photos.length > 0 && (
      <div className='slider-wrapper'>
        <div
          onMouseDown={(e) => test(e)}
          onMouseMove={(e) => handleMouse(e)}
          className='slider-containerv3'
          ref={ref}
          onScroll={() => handleScroll()}
          // onWheel={e => handleWheel(e)}
        >
          <div ref={container} className='photosliderv3'>
            {photos.map((e, i) => {
              return (
                <PhotoButton
                  qwert={qwert}
                  scroll={scroll}
                  e={e}
                  i={i}
                  setOpen={setOpen}
                  setIndex={setIndex}
                />
              );
            })}
          </div>
        </div>
        <MUISlider
          className='photo-slider_slider'
          max={maxScroll}
          value={scroll}
          onChange={(e, value) => handleSlider(value)}
        />
        <PhotosModal
          year={year}
          open={open}
          setOpen={setOpen}
          photos={photos}
          index={index}
          setIndex={setIndex}
        />
      </div>
    )
  );
};

export default PhotoSliderv3;
